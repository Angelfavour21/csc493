// JavaScript for Canvas Animation (Place this in your script file or within a <script> tag)
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  let x = 0;
  let y = canvas.height / 2;
  let dx = 2; // Horizontal speed
  function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw a circle
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, false);
    ctx.fillStyle = "#007BFF";
    ctx.fill();
    ctx.closePath();
    // Update the x-coordinate
    x += dx;
    if (x > canvas.width + 20) {
      x = -20; // Reset circle to the left if it goes off-screen
    }
    // Request the next frame
    requestAnimationFrame(draw);
  }
  // Start the animation
  draw();
});
