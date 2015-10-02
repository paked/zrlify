MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

console.log("zrlifying");

var zrls = [];

for (var i = 0; i < 5; i++) {
    zrls.push("https://alexb.io/f/zach" + (i + 1) + ".jpg")
}

function addZrlify() {
    var observer = new window.WebKitMutationObserver(function(mutations, observer) {
        mutations.forEach(function(mutation) {
            zrlify();
        });
    });

    observer.observe(document, {
        subtree: true,
        childList: true,
        characterData: true
    });
}

function zrlify() {
    var images = document.getElementsByTagName("img");

    for (var i = 0; i < images.length; i++) {
        var image = images[i];

        image.src = zrls[randInt(0, zrls.length)];
    }

    var els = document.getElementsByTagName('*');
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        if (el.nodeType != Node.ELEMENT_NODE) {
            continue;
        }

        el.style.color = "black";
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
