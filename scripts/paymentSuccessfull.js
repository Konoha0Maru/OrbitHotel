let main = document.getElementById("main");
let div = document.createElement("div");
let image = document.createElement("img");
image.src = "https://goodluckhours.com/wp-content/uploads/2021/05/Payment-success.png";
let btn = document.createElement("button");
btn.textContent = "Home page";
btn.onclick = function(){
    location.href = "home.html";
};
div.append(image,btn);
main.append(div)