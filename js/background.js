const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];


// const randomNumber  =
const randomImg = images[Math.floor(Math.random() * images.length)];



document.body.style.backgroundImage = `url(img/${randomImg})`;



//document.body.appendChild(bgimage);




// function randomBg(){
//     const random = Math.floor(Math.random() * images.length);
//     const bGs = [
//         "url(img/0.jpg)",
//         "url(img/1.jpg)",
//         "url(img/2.jpg)",
//         "url(img/3.jpg)",
//         "url(img/4.jpg)",
//         "url(img/5.jpg)"
//     ];
//     document.getElementById("random").style.backgroundImage = bGs[random];
// }
