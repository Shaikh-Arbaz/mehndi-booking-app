import React from 'react';
import './style.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const date = e.target.date.value;
    const notes = e.target.notes.value;

    const message = `Hi, I want to book Mehndi on ${date}. Name: ${name}, Phone: ${phone}, Notes: ${notes}`;
    const whatsappUrl = `https://wa.me/+919892827952?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container">
      <h1>Mehndi Artist Booking</h1>
      <form id="bookingForm" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="text" name="phone" placeholder="WhatsApp Number" required />
        <input type="date" name="date" required />
        <textarea name="notes" placeholder="Any special requests?"></textarea>
        <button type="submit">Book via WhatsApp</button>
      </form>
    </div>
  );
}

export default App;
