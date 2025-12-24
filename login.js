document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dikirimkan secara langsung

    // Mendapatkan nilai dari input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validasi login (username dan password hardcoded untuk contoh)
    if (username === "huri" && password === "password123") {
        // Jika login berhasil, arahkan ke halaman landing
        window.location.href = "index.html";
    } else {
        // Jika login gagal, tampilkan pesan error
        document.getElementById("error-message").textContent = "Username atau password salah!";
    }
});
