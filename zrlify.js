console.log("zrlifying");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("loaded");

    var images = document.getElementsByTagName("img");

    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        console.log(image);

        image.src = "https://hatchexperience.org/wp-content/uploads/gravity_forms/8-2c08cc885a433151d8e43ebd3a8a0e84/2015/08/orbit_profile.jpg";
    }
});

