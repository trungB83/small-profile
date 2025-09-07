const donateBtn = document.getElementById("donateBtn");
const donateInfo = document.getElementById("donateInfo");

donateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  donateInfo.classList.toggle("show");
});

// Fullscreen QR
const qrImage = document.getElementById("qrImage");
const imageOverlay = document.getElementById("imageOverlay");
const overlayImg = document.getElementById("overlayImg");
const closeOverlay = document.getElementById("closeOverlay");

qrImage.addEventListener("click", () => {
  overlayImg.src = qrImage.src;
  imageOverlay.classList.add("show");
});

closeOverlay.addEventListener("click", () => {
  imageOverlay.classList.remove("show");
});

// Đóng overlay khi click ngoài ảnh
imageOverlay.addEventListener("click", (e) => {
  if (e.target === imageOverlay) {
    imageOverlay.classList.remove("show");
  }
});
