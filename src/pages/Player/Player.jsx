import React from "react";
import "./Player.css"
import back_arrow_icon from "../../assets/back_arrow_icon.png"


const Player = () => {
  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" />
    </div>
  )
}

export default Player;