document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const notes = document.getElementById("notes").value;

  const message = `Hi, I'm ${name}. I would like to book a mehndi appointment on ${date}. Notes: ${notes}`;
  const whatsappURL = `https://wa.me/919892827952?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});
