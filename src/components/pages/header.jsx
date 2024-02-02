import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import contactIcon from "../assets/contactus_icon.png";
import emailIcon from "../assets/email_icon.png";
import lVector from "../assets/lvector.png";
import facebookIcon from "../assets/facebook.png";
import InstagramIcon from "../assets/instagram.png";
import TwitterIcon from "../assets/twitter.png";
import LinkedInIcon from "../assets/linkedIn.png";

const targetTime = new Date("2024-04-01").getTime();

function Header() {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="header_main">
      <div className="header">
        <nav className="nav_header">
          <div className="left_nav">
            <img src={logo} alt="logo"></img>
            <h2>eChirp</h2>
          </div>
          <div className="right_nav">
            <h2>Contact us</h2>
            <img src={contactIcon} alt="contact us icon"></img>
          </div>
        </nav>
        <div className="header_content">
          <div className="hcontent_left">
            <h1>Hey YOU!</h1>
            <h2>We're a new AWESOME SOCIAL APP</h2>
            <p>
              Don’t be shy, come find new friends. <br></br>Become an eChirper,
              get notified of launch.
            </p>
            <div className="input">
              <img src={emailIcon} alt="email icon"></img>
              <input
                type="email"
                placeholder="Enter your email address"
                onfocus="this.placeholder = ''"
              ></input>
            </div>
            <button>SUBSCRIBE</button>
            <div className="aboutUs">
              <h3>About Us</h3>
              <div className="vl"></div>
            </div>
          </div>
          <div className="hcontent_right">
            <h2>The count down begins</h2>
            <div className="counter">
              <div className="lvector left">
                <img src={lVector} alt="a vector"></img>
              </div>
              <div className="days">
                <h1>{days}</h1>
                <h3>Days</h3>
              </div>
              <div className="lvector right">
                <img src={lVector} alt="a vector"></img>
              </div>
            </div>
            <div className="smallcounter">
              <h2>{hours} HOURS / {minutes} MINS / {seconds} SECS</h2>
            </div>
            <h2>Stay Tuned!</h2>
            <div className="socials">
              <img src={facebookIcon} alt="facebook"></img>
              <img src={InstagramIcon} alt="instagram"></img>
              <img src={TwitterIcon} alt="twitter"></img>
              <img src={LinkedInIcon} alt="linkedin"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
