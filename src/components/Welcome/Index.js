import React, { useEffect, useState } from "react";
import Feature from "../Feature";
import Review from "../review";
import Popular from "../Popular";
import Navbar from "../Navbar";
import hero from "../../images/kaleidoscope.jpg";
import axios from "axios";

const Welcome = () => {
  const [movie, setMovie] = useState();
  const apiKey = "ff44cc64";
  const [display ,setDisplay] = useState({})
  const page = 2;

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com`, {
        params: {
          apikey: apiKey,
          s: "love",
          y:2022,
          plot: "full",
          type: "movie",
          page: 1,
        },
      })
      .then((response) => {
        const recentMovies = response.data.Search.slice(0, 100);
        console.log();
        setMovie([...recentMovies]);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleClick = data =>{
    console.log(data.Poster)
    setDisplay(data)

  }

  if (!movie) {
    <h1>Veillez patienté</h1>;
  } else {
    return (
      <div className="welcome">
        <Navbar />

        <div className="feature">
          <div className="boxFeature boxFeature1">
            <h4>NETFLIX ORIGINAL</h4>
            <h1 className="featureTitle"> {display.Title} </h1>
            <div className="infoFeature">
              <span>{display.Year}</span>
              <span> | </span>
              <span className="border d-inline-block">18+</span>
              <span> | </span>
              <span> {display.Type} </span>
              <span> | </span>
              <span>Romans policiers</span>
            </div>
            <h5>Regardez la saison 3 maintenant</h5>
            <p className="featureParagraph">
              Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs
              d’Escobar passent à l’action et déclarent la guerre au
              gouvernement.
            </p>
            <div className="btnContentFeature d-flex ">
              <button className="btnFeature pr-3">
                <i className="bi bi-play-fill"></i> Lecture
              </button>
              <button className="btnFeature">
                <i className="bi bi-plus-lg"></i> My liste
              </button>
            </div>
          </div>
          <div className="boxFeature boxFeature2">
            <img  style={{backgroundImage :`url(${hero ?? display.Poster})`}} alt="" className="featureImage" loading="lazy" />
          </div>
        </div>

        
        <div className="containerReview ">
          <div className="boxReview">
            {movie.map((data) => {
              return (
                <img
                  src={data.Poster}
                  key={data.imdbID}
                  alt=""
                  className="reviewImage"
                  onClick={() => handleClick(data)}
                />
              );
            })}
          </div>
        </div>
     
      </div>
    );
  }
};

export default React.memo(Welcome);
