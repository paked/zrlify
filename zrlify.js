console.log("zrlifying");

var zrls = [];

for (var i = 0; i < 5; i++) {
    zrls.push("https://alexb.io/f/zach" + (i + 1) + ".jpg")
}

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

    for (var i = 0; i < images.length; i++) {
        var image = images[i];

        var w = image.width;
        var h = image.height;

        image.src = zrls[randInt(0, zrls.length)];
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

        var content = window.getComputedStyle(el, ':before')
        var text = content.getPropertyValue('content')
        if (!ascii.test(text)) {
            el.style.fontFamily = "";
        }

        if (el.tagName == "A") {
            el.style.color = "blue";
        } else {
            el.style.color = "black";
        }

        el.style.background = "none";
        el.style.backgroundColor = "white";
        el.style.borderColor = "black";
        el.style.borderRadius = "0px";
        el.style.borderImage = "0px";
    }
}

function randInt(min, max) {
    return Math.floor((Math.random() * max) + min);
}

window.ZRLIFY_SET = false;

window.ZRLIFY = function() {
    if (!window.ZRLIFY_SET) {
        zrlify();
        addZrlify();
    }

    window.ZRLIFY_SET = true;
}
