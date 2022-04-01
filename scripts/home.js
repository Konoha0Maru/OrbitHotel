import navbar from "./navbar.js";
import footerPage from "./footer.js";
import qrCode from "./qrCodePage.js";
let nav = document.getElementById("nav");
nav.innerHTML = navbar();
let footerpage = document.getElementById("footer");
footerpage.innerHTML = footerPage();
let QrCode = document.getElementById("QRCode");
QrCode.innerHTML = qrCode();
let arr =[];
document.getElementById("searchHotel").addEventListener("click", showData);
function showData(){
    let goingTo = document.getElementById("goingTo").value;
    let obj ={
    GoingTo:goingTo,
    }
    arr.push(obj);
    console.log(arr)
    localStorage.setItem("city",JSON.stringify(arr));
    location.href = "hotel.html";
}