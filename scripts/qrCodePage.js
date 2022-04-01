function qrCode(){
    return `<div class="homepage_scantheQR_page">
    <div class="homepage_scantheQR_image">
    </div>
    <div class="homepage_scantheQR_page_details">
        <div class="homepage_scantheQR_reward">
            <h1>Rewards are waiting for you in the Orbitz app</h1>
            <ul>
                <li>Earn 4% back when you book your hotel in apps, vs. 3% on site</li>
                <li>Get flight status and gate number notifications</li>
                <li>Have questions about your stay? Message your hotel right in the app</li>
            </ul>
            <h3>Text yourself a dowondload link</h3>
            <div class="homepage_scantheQR_page_form">
                <div class="homepage_scantheQR_page_form_countrycode1">
                    <p>Country code</p>
                    <select  id=""></select>
                </div>
                <div class="homepage_scantheQR_page_form_countrycode2">
                    <p>Phone number </p>
                </div>
                <div class="homepage_scantheQR_page_form_countrycode3">
                    <p>Get the app</p>
                </div>
            </div>
            <p>By provinding your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</p>
        </div>
        <div class="homepage_scantheQR">
            <div class="homepage_scantheQR_pay">
                <img src="https://a.travel-assets.com/mad-service/qr-code/portfolio_app_landing/qr_app_landing_footer_orbitz.png" alt="">
            </div>
            <h3>Scan the QR code</h3>
        </div>
    </div>
</div>`
}
export default qrCode;