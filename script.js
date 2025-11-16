// Open popup
document.querySelectorAll(".book-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const carName = e.target.closest(".car-card").getAttribute("data-car");
    document.getElementById("selectedCar").value = carName;
    document.getElementById("popup").style.display = "flex";
  });
});

// Close popup
document.getElementById("closePopup").onclick = function () {
  document.getElementById("popup").style.display = "none";
};

// Save booking locally
document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const booking = {
    name: this.name.value,
    mobile: this.mobile.value,
    date: this.date.value,
    car: this.car.value,
    timestamp: new Date().toLocaleString()
  };

  // Get existing bookings
  const existing = JSON.parse(localStorage.getItem("marsana_bookings") || "[]");

  // Add new booking
  existing.push(booking);

  // Save back to local storage
  localStorage.setItem("marsana_bookings", JSON.stringify(existing));

  alert("Booking successfully received!");

  this.reset();
  document.getElementById("popup").style.display = "none";
});