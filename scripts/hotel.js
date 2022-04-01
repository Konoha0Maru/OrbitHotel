let mapkey="AIzaSyAx9aGx863cLAPFPTrXrHx7goQN-0IIG_I";
let mapshow = document.getElementById("mapshow");
let City =JSON.parse(localStorage.getItem("city")); 
console.log(City);
showMap(City);
import navbar from "./navbar.js";
import footerPage from "./footer.js";
import qrCode from "./qrCodePage.js";
let nav = document.getElementById("nav");
nav.innerHTML = navbar();
let footerpage = document.getElementById("footer");
footerpage.innerHTML = footerPage();
let QrCode = document.getElementById("QRCode");
QrCode.innerHTML = qrCode();
function showMap(City){
    City.forEach(function(item){
        let city = item.GoingTo;
        let mapurl = `https://www.google.com/maps/embed/v1/place?key=${mapkey}&q=${city}`;
        let mapiframe = document.getElementById("map");
        mapiframe.src=mapurl;
        mapshow.append(mapiframe);
    })
}