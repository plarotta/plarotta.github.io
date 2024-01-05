// Start up particles in background
particlesJS("particles-js", {
    particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#fff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#ff0000'
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: '',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 2,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 125,
      color: "#ababab",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'bounce',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 3000,
        rotateY: 3000
      }
    },
    array: []
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      grab:{
        distance: 100,
        line_linked:{
          opacity: 1
        }
      },
      bubble:{
        distance: 200,
        size: 80,
        duration: 0.4
      },
      repulse:{
        distance: 50,
        duration: 0.2
      },
      push:{
        particles_nb: 4
      },
      remove:{
        particles_nb: 2
      }
    },
    mouse:{}
  },
  retina_detect: true,
  fn: {
    interact: {},
    modes: {},
    vendors:{}
  },
  tmp: {}
});


// HELPER FUNCTIONS
function setColor(c, smooth_transition = true) {
  var text_c = "#000"; var bg_c = "#fff"; var header_c = "#aaa";
  if (c === "light") {
    // set text+links to black, background to white, & headers to light grey
    text_c = "#000"; bg_c = "#fff"; header_c = "#aaa";
  } else if (c == "dark") {
    // set text+links to white, background to dark grey, & headers to light grey
    text_c = "#fff"; bg_c = "#222222"; header_c = "#aaa";
  } else if (c == "sepia") {
    // set text+links to dark maroon, background to beige, & headers to
    // light orange
    text_c = "#42210b"; bg_c = "#fff4dd"; header_c = "#ecac80";
  }

  // Make changes to CSS
  if (smooth_transition) {
    $("body").css("transition-property", "color, background");
    $("body").css("transition-duration", "1.5s");
    $("body").css("transition-timing-function", "ease-in-out");

    $("a,a\\:visited").css("transition", "color 1.5s ease-in-out");

    $(".section h3, .section:last-child").css("transition", "color 1.5s ease-in-out");
  }
  $("body").css("color", text_c);
  $("body").css("background", bg_c);

  $("a,a\\:visited").css("color", text_c);

  $(".section h3, .section:last-child").css("color", header_c);

}

function setCookie(c) {
  // Specify expiration of cookie
  var DAYS = 7; // default 1 week expiration
  var date = new Date();
  date.setTime(date.getTime() + (DAYS*24*60*60*1000));
  var expires = "; expires=" + date.toUTCString();
  // finally create cookie
  document.cookie = "background-color=" + c + expires + "; path=/";
}

var HASH = "#";
var ITEM_FADE = "item-fade";
var ITEM_HIDE = "item-hide";
var ITEMS_LINKS_NOT_CLICKABLE = "items-links-not-clickable";
var SELECTOR_LI_COLLAPSE = ".li-collapse";
var SELECTOR_LI_CONTENT = ".li-content";
var SELECTOR_LI_EXPAND = ".li-expand";
var SPACE = " ";
function expandAndRemoveFade(listItemId) {
  var liContent = document.querySelector(HASH + listItemId + SPACE + SELECTOR_LI_CONTENT);
  var liEllipsis = document.querySelector(HASH + listItemId + SPACE + SELECTOR_LI_EXPAND);
  var collapseArrow = document.querySelector(HASH + listItemId + SPACE + SELECTOR_LI_COLLAPSE);

  var inFadedMode = liContent.classList.contains(ITEM_FADE);
  if (inFadedMode) {
    liContent.classList.remove(ITEM_FADE);
    liContent.classList.remove(ITEMS_LINKS_NOT_CLICKABLE);
    liEllipsis.classList.add(ITEM_HIDE);
    collapseArrow.classList.remove(ITEM_HIDE);
  }
}
function collapseAndAddFade(listItemId) {
  var liContent = document.querySelector(HASH + listItemId + SPACE + SELECTOR_LI_CONTENT);
  var liEllipsis = document.querySelector(HASH + listItemId + SPACE + SELECTOR_LI_EXPAND);
  var collapseArrow = document.querySelector(HASH + listItemId + SPACE + SELECTOR_LI_COLLAPSE);

  var inFadedMode = liContent.classList.contains(ITEM_FADE);
  if (!inFadedMode) {
    liContent.classList.add(ITEM_FADE);
    liContent.classList.add(ITEMS_LINKS_NOT_CLICKABLE);
    liEllipsis.classList.remove(ITEM_HIDE);
    collapseArrow.classList.add(ITEM_HIDE);
  }
}
