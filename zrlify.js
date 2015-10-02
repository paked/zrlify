console.log("zrlifying");

var zrls = ["https://hatchexperience.org/wp-content/uploads/gravity_forms/8-2c08cc885a433151d8e43ebd3a8a0e84/2015/08/orbit_profile.jpg",
            "http://d.fastcompany.net/multisite_files/fastcompany/imagecache/slideshow_large/slideshow/2015/06/3047076-slide-s-18-thiel-fellows-zach-latta.jpg",
            "http://res.cloudinary.com/dsjid8mlr/image/upload/c_thumb,f_auto,g_faces,h_600,w_600/v1421540399/ney0aexerkxplxhbjeap.jpg"];

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("loaded");

    var images = document.getElementsByTagName("img");

    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        console.log(image);

        image.src = zrls[randInt(0, zrls.length)];
    }
});

function randInt(min, max) {
    return Math.floor((Math.random() * max) + min);
}
