let btn = document.querySelector("button").addEventListener("click", showData);
let arr = [];
function showData(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let password = document.getElementById("password").value;

  if (firstname == "" || lastname == "" || email == "" || password == "") {
    alert("Please fill in the details");
  } else {
    var data = {
      Email: email,
      Firstname: firstname,
      Lastname: lastname,
      Password: password,
    };
    arr.push(data);
    console.log(arr);
    localStorage.setItem("signUpDetails", JSON.stringify(arr));
    location.href = "signIn.html";
  }
}
