
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (username === "rioherlangga71@gmail.com" && password === "iwak12345") {
    window.location.href = "dashboard.html";
  } else {
    errorMsg.textContent = "Username atau password salah!";
  }
}
