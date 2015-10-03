console.log("zrlifying");

var zrls = [];

// Generate zrl image URLs
for (var i = 1; i <= 5; i++) {
  zrls.push("https://alexb.io/f/zach" + i + ".jpg");
}

function randInt(min, max) {
  return Math.floor((Math.random() * max) + min);
}

// addZrlify creates a MutationObserver to watch the DOM and update elements which do not conform to style
function addZrlify() {
  var observer = new window.WebKitMutationObserver(function(mutations, observer) {
    zrlify();
  });

  observer.observe(document, {
    subtree: true,
    childList: true,
    characterData: true
  });
}

var ascii = /^[ -~]*$/;

function zrlify() {
  var images = document.getElementsByTagName("img");

  // Iterate over images in the web page and perform replacements
  for (var i = 0; i < images.length; i++) {
    var image = images[i];

    var w = image.width;
    var h = image.height;

    image.src = zrls[randInt(0, zrls.length)];

    // Make sure that the image does not look too out of place by scaling it.
    image.width = w;
    image.height = h;
    image.style.width = w + "px";
    image.style.height = h + "px";
  }

  var els = document.getElementsByTagName('*');
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    if (el.nodeType != Node.ELEMENT_NODE) {
      continue;
    }

    el.style.fontFamily = "Times, \"Times New Roman\", serif";

    // If the element is a octicon or equivalent, do not apply a font.
    var content = window.getComputedStyle(el, ':before');
    var text = content.getPropertyValue('content');
    if (!ascii.test(text)) {
      el.style.fontFamily = "";
    }

    // Make links look normal-ish
    if (el.tagName == "A") {
      el.style.color = "blue";
    } else {
      el.style.color = "black";
    }

    // Various style resets.
    el.style.background = "none";
    el.style.backgroundColor = "white";
    el.style.borderColor = "black";
    el.style.borderRadius = "0px";
    el.style.borderImage = "0px";
  }
}

// Whether zrlify has been executed or not
window.ZRLIFY_SET = false;

// The entry point for zrlify
window.ZRLIFY = function() {
  if (!window.ZRLIFY_SET) {
    zrlify();
    addZrlify();

    var wq = document.createElement("p");
    wq.textContent = ":wq";
    document.body.appendChild(wq);
  }

  window.ZRLIFY_SET = true;
}
