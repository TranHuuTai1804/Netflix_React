import React, { useEffect, useRef } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({title}) => {
  const cardsRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    const ref = cardsRef.current;
    ref.addEventListener("wheel", handleWheel);

    return () => {
      ref.removeEventListener("wheel", handleWheel);
    };
  }, []); 
  return (
    <div className="title_cards">
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="cards_list" ref={cardsRef}>
        {cards_data.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
