function navbar(){
    return `<div id="navbar">
    <div id="header">
        <div class="header_part1">
            <a href="home.html">
                <img id="logo_img" src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2" alt="">
            </a>
            <div class="more_travel">
                 More travel 
               <select name="" id="moreTravel_option">
                <option value=""></option>
                <option value="">Stays</option>
                <option value="">Flight</option>
                <option value="">Cars</option>
                <option value="">Packages</option>
                <option value="">Things to do</option>
                <option value="">Cruises</option>
                </select>
            </div>
        </div>
        <div class="header_part2">
            <ul id="navbar_ul">
                <a href=""><li>Espanol</li></a>
                <a href=""><li>List your property</li></a>
                <a href=""><li>Support</li></a>
                <a href=""><li>Trips</li></a>
                <a href="signUp.html"><li>Sign in</li></a>
            </ul>
        </div>
    </div>
    
</div>`
}
export default navbar;