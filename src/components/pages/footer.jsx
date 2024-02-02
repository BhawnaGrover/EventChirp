import logo from "../assets/logo.png";
import facebookIcon from "../assets/facebook.png";
import InstagramIcon from "../assets/instagram.png";
import TwitterIcon from "../assets/twitter.png";
import LinkedInIcon from "../assets/linkedIn.png";
function Footer() {
  const date = new Date().getFullYear();

  return (
    <div>
      <footer>
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <p className="intouch">Get in touch</p>
        <div className="footer_div">
          <div className="footer_left">
            <img src={logo} alt="logo"></img>
            <div className="address">
              <h2>OFFICE</h2>
              <p>NEW YORK, NY 10007, US</p>
            </div>
            <div className="followUs">
              <h2>FOLLOW US</h2>
              <div className="socials_footer">
                <img src={facebookIcon} alt="facebook"></img>
                <img src={InstagramIcon} alt="instagram"></img>
                <img src={TwitterIcon} alt="twitter"></img>
                <img src={LinkedInIcon} alt="linkedin"></img>
              </div>
            </div>
            <div className="copyright">
              <p>&copy; {date} | Eventchirp</p>
              <p>All rights reserved</p>
            </div>
          </div>
          <div className="footer_right">
            <h2>CONTACT US</h2>
            <form>
              <div className="first_line">
                <input
                  type="text"
                  placeholder="Name"
                  onfocus="this.placeholder = ''"
                ></input>
                <input
                  type="email"
                  placeholder="Email"
                  onfocus="this.placeholder = ''"
                ></input>
                <input
                  type="text"
                  placeholder="Subject"
                  onfocus="this.placeholder = ''"
                ></input>
              </div>
              <div className="sencondline">
                <input
                  type="text"
                  placeholder="Message"
                  onfocus="this.placeholder = ''"
                ></input>
              </div>
              <div className="submit_footer">
                <button>SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </footer>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}
export default Footer;
