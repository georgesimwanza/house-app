function reserve() {
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    if (!checkin || !checkout) {
        alert("Please select both check-in and check-out dates.");
        return;
    }

    alert("Reservation made from " + checkin + " to " + checkout + " for " + guests + " guests.");
}