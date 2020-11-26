$(document).ready(function() {
    var arrayImages = ['img/foto1.jpg', 'img/foto2.jpg', 'img/foto3.jpg', 'img/foto.jpg'];
    var i = 0;
    setInterval(function() {
        var imageUrl = arrayImages[i];
        $("#hero-section").css("background-image", 'url(' + imageUrl + ')', arrayImages[i]);
        console.log(imageUrl);
        i++;
        if(i==arrayImages.length) {
            i=0;
        }  
    },5000);
});