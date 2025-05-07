var images = ["img1.jpeg","img2.jpeg","img3.jpeg","img4.jpeg","img5.jpeg","img6.jpeg"];

console.log(images[0]);

function changeImg(){
    var randomIndex = Math.floor(Math.random() * images.length)
    console.log(randomIndex);

    // console.log(images[randomIndex]);

    var image = document.getElementById("image");

    image.src = "../images/" + images[randomIndex]
    
}
