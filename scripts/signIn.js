document.querySelector("button").addEventListener("click", login);
let database = JSON.parse(localStorage.getItem("signUpDetails"));
function login() {
  database.map(function (item) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(email, password);
    if ((email = item.Email && password == item.Password)) {
      location.href = "home.html";
    } else {
      alert("Invalid Credentials, Please Fill the Details Again");
    }
  });
}
