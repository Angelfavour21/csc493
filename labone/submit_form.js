document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comments = document.getElementById("comments").value;
    const formData = {
      name: name,
      email: email,
      comments: comments,
    };
    displayFormData(formData);
  });

function displayFormData(formData) {
  const newWindow = window.open("", "_blank");
  newWindow.document.write(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Precious Form Receipt</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #f5f3ff, #cffafe, #ffe4e6);
        color: #1f2937;
        display: grid;
        place-items: center;
        min-height: 100vh;
      }
      .box {
        background: rgba(255,255,255,0.8);
        border-radius: 18px;
        padding: 32px;
        width: min(500px, 90vw);
        box-shadow: 0 18px 40px rgba(31, 41, 55, 0.12);
      }
      h2 { margin-top: 0; }
      p { line-height: 1.7; }
    </style>
  </head>
  <body>
    <div class="box">
      <h2>Form Submitted Successfully!</h2>
      <p>Thank you for sharing your details with Precious.</p>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Comments:</strong> ${formData.comments}</p>
    </div>
  </body>
</html>
`);
}
