import react from "react"
import socialLinks from "../images/social-links.png"
import weatherLogos from "../images/weather-logos.png"
import georgiaLogo from "../images/georgia-logo.png"
import footerCloud from "../images/footer-cloud.png"

export default function Footer(){
    return(
        <footer className="desk-footer">
            <div className="footer-first-row">
                <div>
                    <h3>Connect With Us</h3>
                    <img src={socialLinks}></img>
                </div>
                <div>
                    <img src={weatherLogos}></img>
                </div>
            </div>
            <div className="footer-second-row">
                <ul>
                    <li>Feedback</li>
                    <li>Careers</li>
                    <li>Press Room</li>
                    <li>Advertise With Us</li>
                    <li>TV</li>
                </ul>
            </div>
            <div className="footer-third-row">
                <ul>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>AdChoices</li>
                    <li>Assessability Statement</li>
                    <li>Data Rights</li>
                </ul>
            </div>
            <div className="footer-fourth-row">
                <img src={georgiaLogo}></img>
            </div>
            <div className="footer-fifth-row">
                <p>We recognize our responsibility to use data and technology for good. Take control of your data.</p>
            </div>
            <div className="footer-sixth-row">
                <ul>
                    <li>Privacy Settings</li>
                    <li>Review My Advertising Settings</li>
                    <li>Data Rights</li>
                </ul>
            </div>
            <div className="footer-seventh-row">
                <p>© Copyright TWC Product and Technology LLC 2014, 2022</p>
            </div>
            <div className="footer-eighth-row">
                <img src={footerCloud}></img>
            </div>
        </footer>
    )
}