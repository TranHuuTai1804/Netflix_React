import React from "react";
import "./Footer.css"
import facebook from "../../assets/facebook_icon.png"
import instagram from "../../assets/instagram_icon.png"
import twitter from "../../assets/twitter_icon.png"
import youtube from "../../assets/youtube_icon.png"


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="app">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />

        <div className="list">
        <ul>
            <li><a href="#">Audio Description</a></li>
            <li><a href="#">Investor Relation</a></li>
            <li><a href="#">Legal Notices</a></li>
          </ul>
          <ul>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Cookie Preferences</a></li>
          </ul>
          <ul>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Corporate Information</a></li>
          </ul>
          <ul>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <p className="copyright">© 2024 Netflix, Inc. All Rights Reserved. Netflix and the Netflix logo are trademarks of Netflix, Inc.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;