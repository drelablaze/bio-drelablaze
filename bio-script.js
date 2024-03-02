const imageEl = document.getElementById("image");

const images = ["dami.jpg", "dami-1.jpg", "dami-2.jpg", "dami-3.jpg"];
function changeImage() {
  let random = Math.floor(Math.random() * 4);
  imageEl.src = images[random];
}

setInterval(changeImage, 1000);
