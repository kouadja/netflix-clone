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



  const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWEzYWYwNTRiYTk0YjJmMzk5Y2E1N2Q1YTA2NGJlZiIsInN1YiI6IjYzYmQxZWZjYWU2ZjA5M2M0MjlkMzU5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.quhAqcaNj1XRMrJe7llSBMsv4NO5DxZnN8ecYjy9HfI'
    }
  };


  





  useEffect(() => {
    axios
      .get(url, options)
      .then((response) => {
        setMovie([response.data.results])

        console.log(response.data.results)
        setDisplay([response.data.results])
   
    
      })
      .catch((error) => console.log(error));
  }, []);

  
  const handleClick = data =>{
    console.log(data.Poster)
    setDisplay(data)

  }
  console.log(display)


  if (!movie) {
    <h1>Veillez patienté</h1>;
  } else {
    return (
      <div className="welcome">
        <Navbar />

        <div className="feature">
          <div className="boxFeature boxFeature1">
            <h4>NETFLIX ORIGINAL</h4>
            <h1 className="featureTitle"> {display.title} </h1>
            <div className="infoFeature">
              <span>{display.Year}</span>
              <span> | </span>
              <span className="border d-inline-block">18+</span>
              <span> | </span>
              <span> {display.release_date} </span>
              <span> | </span>
              <span>Romans policiers</span>
            </div>
            <h5>Regardez la saison 3 maintenant</h5>
            <p className="featureParagraph">
             {display.overview}
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
            <img  src={`https://image.tmdb.org/t/p/w500${ display?.poster_path}`} alt="" className="featureImage" loading="lazy" />
          </div>
        </div>
 

        
        
        <div className="containerReview ">
          <div className="boxReview">
            {movie[0].map((data) => {
             
              return (
                <>
                <div>

                <img
                  src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} 
                  key={data.vote_count  }
                  alt=""
                  className="reviewImage"
                  onClick={() => handleClick(data)}
                  />
                  {/* <p>{data.original_title}</p> */}
                </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="containerReview ">
          <div className="boxReview">
            {movie[0].map((data) => {
              console.log(data[0])
              return (
                <>
                <div>

                <img
                  src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} 
                  key={data.vote_count  }
                  alt=""
                  className="reviewImage"
                  onClick={() => handleClick(data)}
                  />
                  {/* <p>{data.original_title}</p> */}
                </div>
                </>
              );
            })}
          </div>
        </div>
     
      </div>
    );
  }
};

export default React.memo(Welcome);
