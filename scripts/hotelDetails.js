import navbar from "./navbar.js";
import footerPage from "./footer.js";
import qrCode from "./qrCodePage.js";
let nav = document.getElementById("nav");
nav.innerHTML = navbar();
let footerpage = document.getElementById("footer");
footerpage.innerHTML = footerPage();
let QrCode = document.getElementById("QRCode");
QrCode.innerHTML = qrCode();

document.getElementById("reservRoom1").addEventListener("click",reserve);
function reserve(){
    location.href = "payment.html";
}