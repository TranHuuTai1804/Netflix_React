import React from "react";
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {

  return (
    <div className="home">
        <Navbar/>
        <div className="hero">
          <img src={hero_banner} alt="" className="banner_img"/>
        </div>
        <div className="content">
            <img src={hero_title} alt="" className="hero_banner"/>
            <p className="desc">Discovering his ties to a secret ancient order,a young man living in modern 
              istanbul embanks on a quest to save the city from an immortal enemy.
            </p>

            <div className="hero_btn">
              <button className="btn">
                <img src={play_icon} alt="" />
                Play
              </button>
              <button className="btn dark_btn">
                <img src={info_icon} alt="" />
                More info
              </button>
            </div>
            <div className="popular">
            <TitleCards/>
            </div>
        </div>

        <div className="more_cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={'Only on Netflix'} category={"popular"}/>
        <TitleCards title={'Upcoming'} category={"upcoming"}/>
        <TitleCards title={"Blockbuster Movies"} category={"now_playing"}/>
        </div>

    <Footer/>
    </div>

  )
}

export default Home;