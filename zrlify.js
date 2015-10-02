MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

console.log("zrlifying");

var zrls = ["https://hatchexperience.org/wp-content/uploads/gravity_forms/8-2c08cc885a433151d8e43ebd3a8a0e84/2015/08/orbit_profile.jpg",
"http://d.fastcompany.net/multisite_files/fastcompany/imagecache/slideshow_large/slideshow/2015/06/3047076-slide-s-18-thiel-fellows-zach-latta.jpg",
"http://res.cloudinary.com/dsjid8mlr/image/upload/c_thumb,f_auto,g_faces,h_600,w_600/v1421540399/ney0aexerkxplxhbjeap.jpg"];


/*document.addEventListener("DOMContentLoaded", function() {
    zrlify();
    addZrlify();
});*/

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
