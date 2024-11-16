import React, { useEffect, useState } from "react";
import "./Navbar.css"
import logo from "../../assets/logo.png"
import bell_icon from "../../assets/bell_icon.svg"
import search_icon from "../../assets/search_icon.svg" 
import profile_img from "../../assets/profile_img.png" 
import caret_icon from "../../assets/caret_icon.svg" 


const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) { // Khi cuộn xuống hơn 50px
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Lắng nghe sự kiện cuộn

    // Dọn dẹp khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar_left">
            <img src={logo} alt="" />
            <ul>
                <a href=""><li>Home</li></a>
                <a href=""><li>TV Show</li></a>
                <a href=""><li>Movies</li></a>
                <a href=""><li>New & Popular</li></a>
                <a href=""><li>My list</li></a>
                <a href=""><li>Browse by Languages</li></a>
            </ul>
        </div>
        <div className="navbar_right">
            <img src={search_icon} alt="" />
            <p>Children</p>
            <img src={bell_icon} alt="" />
            <div className="navbar_profile">
            <img src={profile_img} alt=""  className="profile"/>
            <img src={caret_icon} alt=""  className="drop"/>
            <p className="dropdown">Sign Out of Netflix</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar;