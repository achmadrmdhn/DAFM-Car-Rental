const username = "pemweb1";
const password = "bgadam";

function login() {
  let userInput = document.getElementById("username").value;
  let passwordInput = document.getElementById("password").value;
  let form = document.getElementById("form");

  if (userInput === username && passwordInput === password) {
    alert("Selamat! \nLogin Anda Berhasil");
    form.submit();
  } else {
    alert("Login Gagal \nSilahkan Masukkan Data Yang Valid!");
  }
}

document.getElementById("form").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    login();
  }
});