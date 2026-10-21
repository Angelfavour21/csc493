// JavaScript for Custom Video Controls (Place this in a separate script file or within a <script> tag)
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("myVideo");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  playBtn.addEventListener("click", function () {
    video.play();
  });
  pauseBtn.addEventListener("click", function () {
    video.pause();
  });
});
