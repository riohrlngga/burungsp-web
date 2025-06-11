
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  if (username === "admin" && password === "admin123") {
    window.location.href = "dashboard.html";
  } else {
    errorMsg.textContent = "Username atau password salah!";
  }
}
