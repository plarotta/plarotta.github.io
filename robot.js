/* ----------------------------------------------------------------------------
   Interactive robot arm — a 2-link planar manipulator that reaches toward the
   cursor using inverse kinematics. It lives in the lower-right corner and is
   dormant until you press the mount button; press again to put it to sleep.
   Click anywhere (while awake) to close the gripper.

   Tweak the CONFIG block below to play with its behavior.
---------------------------------------------------------------------------- */

(function () {
  var svg = document.getElementById('arm');
  var widget = document.getElementById('robot');
  var toggle = document.getElementById('robot-toggle');
  if (!svg || !widget || !toggle) return;

  // ---- CONFIG (mess with these) -------------------------------------------
  var CFG = {
    viewW: 300,        // svg viewBox width  (must match the HTML)
    viewH: 300,        // svg viewBox height (must match the HTML)
    baseX: 240,        // shoulder mount x, near the bottom-right corner
    baseY: 240,        // shoulder mount y
    upperArm: 92,      // length of segment 1 (shoulder → elbow)
    foreArm: 80,       // length of segment 2 (elbow → wrist)
    elbowUp: true,     // bend the elbow upward (false = downward)
    ease: 0.06,        // motion smoothing: 0 = frozen, 1 = instant snap
    gripEase: 0.12,    // how fast the gripper opens/closes
    fingerLen: 18,     // gripper finger length
    gripOpen: 0.62,    // finger spread when open (radians)
    gripClosed: 0.12,  // finger spread when grabbing
    idleAfterMs: 2000, // go into idle sway after this long without input
    idleSpeed: 0.0006, // idle sway speed
    pad: 18,           // keep the reach this far inside the box edges
  };
  // -------------------------------------------------------------------------

  var seg1 = document.getElementById('seg1');
  var seg2 = document.getElementById('seg2');
  var grip1 = document.getElementById('grip1');
  var grip2 = document.getElementById('grip2');
  var jShoulder = document.getElementById('j-shoulder');
  var jElbow = document.getElementById('j-elbow');

  var cur = { a1: -Math.PI / 2, a2: -Math.PI / 2, grip: CFG.gripOpen };
  var target = { x: CFG.baseX - 90, y: CFG.baseY - 90 };
  var lastInput = 0;
  var grabbing = false;
  var enabled = false;
  var rafId = null;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  jShoulder.setAttribute('cx', CFG.baseX);
  jShoulder.setAttribute('cy', CFG.baseY);

  function toSvg(clientX, clientY) {
    var r = svg.getBoundingClientRect();
    return {
      x: (clientX - r.left) / r.width * CFG.viewW,
      y: (clientY - r.top) / r.height * CFG.viewH,
    };
  }

  function onMove(e) {
    if (!enabled) return;
    var p = toSvg(e.clientX, e.clientY);
    target.x = p.x;
    target.y = p.y;
    lastInput = performance.now();
  }

  function onDown(e) {
    if (!enabled) return;
    if (e.target === toggle || toggle.contains(e.target)) return; // toggling, not grabbing
    grabbing = true;
  }

  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('pointerdown', onDown);
  window.addEventListener('pointerup', function () { grabbing = false; });

  // shortest-path angular interpolation
  function easeAngle(a, b, t) {
    var d = Math.atan2(Math.sin(b - a), Math.cos(b - a));
    return a + d * t;
  }

  // desired shoulder + forearm absolute angles to reach (tx, ty)
  function solveIK(tx, ty) {
    // keep the whole arm inside the box: only reach up-and-left of the mount
    tx = Math.max(CFG.pad, Math.min(CFG.baseX, tx));
    ty = Math.max(CFG.pad, Math.min(CFG.baseY, ty));

    var dx = tx - CFG.baseX;
    var dy = ty - CFG.baseY;
    var d = Math.hypot(dx, dy);

    var maxR = CFG.upperArm + CFG.foreArm - 0.5;
    var minR = Math.abs(CFG.upperArm - CFG.foreArm) + 0.5;
    d = Math.max(minR, Math.min(maxR, d));

    var a = Math.atan2(dy, dx);
    var cosQ = (CFG.upperArm * CFG.upperArm + d * d - CFG.foreArm * CFG.foreArm) / (2 * CFG.upperArm * d);
    var q = Math.acos(Math.max(-1, Math.min(1, cosQ)));
    var sign = CFG.elbowUp ? -1 : 1;

    var a1 = a + sign * q;
    var ex = CFG.baseX + CFG.upperArm * Math.cos(a1);
    var ey = CFG.baseY + CFG.upperArm * Math.sin(a1);
    var wx = CFG.baseX + d * Math.cos(a);
    var wy = CFG.baseY + d * Math.sin(a);
    var a2 = Math.atan2(wy - ey, wx - ex);
    return { a1: a1, a2: a2 };
  }

  function line(el, x1, y1, x2, y2) {
    el.setAttribute('x1', x1); el.setAttribute('y1', y1);
    el.setAttribute('x2', x2); el.setAttribute('y2', y2);
  }

  function frame(now) {
    if (!reduce && now - lastInput > CFG.idleAfterMs) {
      var t = now * CFG.idleSpeed;
      target.x = CFG.baseX - 70 + 60 * Math.sin(t);
      target.y = CFG.baseY - (CFG.upperArm + CFG.foreArm) * 0.66 + 24 * Math.sin(t * 1.7);
    }

    var goal = solveIK(target.x, target.y);
    var e = reduce ? 1 : CFG.ease;
    cur.a1 = easeAngle(cur.a1, goal.a1, e);
    cur.a2 = easeAngle(cur.a2, goal.a2, e);
    cur.grip += ((grabbing ? CFG.gripClosed : CFG.gripOpen) - cur.grip) * (reduce ? 1 : CFG.gripEase);

    var ex = CFG.baseX + CFG.upperArm * Math.cos(cur.a1);
    var ey = CFG.baseY + CFG.upperArm * Math.sin(cur.a1);
    var wx = ex + CFG.foreArm * Math.cos(cur.a2);
    var wy = ey + CFG.foreArm * Math.sin(cur.a2);

    line(seg1, CFG.baseX, CFG.baseY, ex, ey);
    line(seg2, ex, ey, wx, wy);
    jElbow.setAttribute('cx', ex);
    jElbow.setAttribute('cy', ey);

    var f1 = cur.a2 + cur.grip;
    var f2 = cur.a2 - cur.grip;
    line(grip1, wx, wy, wx + CFG.fingerLen * Math.cos(f1), wy + CFG.fingerLen * Math.sin(f1));
    line(grip2, wx, wy, wx + CFG.fingerLen * Math.cos(f2), wy + CFG.fingerLen * Math.sin(f2));

    rafId = requestAnimationFrame(frame);
  }

  function enable() {
    enabled = true;
    widget.classList.add('active');
    toggle.textContent = '×';
    toggle.setAttribute('aria-label', 'Put the robot arm to sleep');
    toggle.setAttribute('title', 'Put the robot arm to sleep');
    // wake from a folded pose, then idle-sway until the cursor moves
    cur.a1 = -Math.PI / 2 - 0.35;
    cur.a2 = -Math.PI / 2 - 0.35;
    lastInput = 0;
    if (!rafId) rafId = requestAnimationFrame(frame);
  }

  function disable() {
    enabled = false;
    grabbing = false;
    widget.classList.remove('active');
    toggle.textContent = '🦾';
    toggle.setAttribute('aria-label', 'Wake the robot arm');
    toggle.setAttribute('title', 'Wake the robot arm');
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  }

  toggle.addEventListener('click', function () {
    if (enabled) disable(); else enable();
  });
})();
