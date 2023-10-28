// Fungsi untuk menghitung mundur menuju tanggal pernikahan
function countdown() {
    const weddingDate = new Date("2023-10-12T15:00:00Z").getTime(); // Tanggal pernikahan
    const now = new Date().getTime(); // Waktu saat ini

    const timeRemaining = weddingDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Menambahkan animasi untuk countdown timer
    const countdownTimer = document.getElementById("countdown-timer");
    countdownTimer.classList.add("countdown-animation");

    setTimeout(() => {
        countdownTimer.classList.remove("countdown-animation");
    }, 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Memanggil fungsi countdown setiap detik
setInterval(countdown, 1000);

// Menangani formulir konfirmasi kehadiran
document.getElementById("rsvp-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    // Mengambil nilai nama, email, dan kehadiran dari formulir
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const attendance = document.getElementById("attendance").value;

    // Melakukan sesuatu dengan data yang diambil (misalnya, mengirim ke server)

    // Menampilkan pesan konfirmasi
    alert(`Terima kasih, ${name}! Anda ${attendance} hadir dalam pernikahan kami.`);
});

// Fungsi untuk menganimasikan latar belakang kontainer
function animateBackground() {
    const container = document.querySelector(".container");
    let backgroundPosition = 0;

    function moveBackground() {
        backgroundPosition++;
        container.style.backgroundPositionX = backgroundPosition + "px";
        requestAnimationFrame(moveBackground);
    }

    requestAnimationFrame(moveBackground);
}

// Memanggil fungsi animasi latar belakang
animateBackground();
