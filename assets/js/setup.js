// Start up particles in background
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 125,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ababab"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 9
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 5.409158431828455,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 174.3848091455144,
        "size_min": 9.688044952528577,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ababab",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 205.87095524123225,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
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

// Check if a cookie with color settings exist
var bg_color = document.cookie.replace(
    /(?:(?:^|.*;\s*)background-color\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (bg_color) {
  // If so, then use those settings to set class=selected to selected color
  $('.color-option[data-palette="'+bg_color+'"]').addClass('selected');
} else {
  // ...else default to 'sepia'...
  var DEFAULT = "dark";
  $('.color-option[data-palette="'+DEFAULT+'"]').addClass('selected');
  // ...and init cookie
  setCookie(DEFAULT);
}

// Set CSS depending on selected color
var color = $(".color-option.selected").attr('data-palette');
setColor(color, /*smooth_transition=*/false);

// Set click handlers for color palette
$(document).on('click', '.color-option[data-palette="light"]',
  function() {
    $(".color-option.selected").removeClass('selected');
    $(this).addClass('selected');

    setColor("light");
    setCookie("light");
  }
);
$(document).on('click', '.color-option[data-palette="dark"]',
  function() {
    $(".color-option.selected").removeClass('selected');
    $(this).addClass('selected');

    setColor("dark");
    setCookie("dark");
  }
);
$(document).on('click', '.color-option[data-palette="sepia"]',
  function() {
    $(".color-option.selected").removeClass('selected');
    $(this).addClass('selected');

    setColor("sepia");
    setCookie("sepia");
  }
);

// Email obfuscation
// see: https://css-tricks.com/how-to-safely-share-your-email-address-on-a-website/
var encodedEmail = "aXp6eUBpenp5Z29tZXouY29t" // should be {{ site.email }}
const emailElement = document.getElementById("email")
emailElement.setAttribute("href", "mailto:".concat(atob(encodedEmail)))
