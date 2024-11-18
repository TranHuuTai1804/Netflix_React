import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmM3ODZjYjBlNjQ0YWJiOWMyZmMzMTgwYzE4NDQ1NCIsIm5iZiI6MTczMTkxNzQ5Ni4wNTk4MDgzLCJzdWIiOiI2NzNhZjRiYjExOTkxN2JjMWY1ZWFhOTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.i6aiJ19UbB2TMFRKwBS_0RFhI_M0wo5YcK69nb1_SZc'
    }
  };
  
  

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category || "now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

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
        {apiData.map((card, index) => {
        return  <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` +card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  );
};

export default TitleCards;
