import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var seriesDB = {
    Action: [
      {
        name: "The Umbrella Academy",
        rating: "⭐ ⭐ ⭐ ⭐",
        yearOfRelease: "2019"
      },
      {
        name: "Punisher",
        rating: "⭐ ⭐ ⭐ ⭐ ⭐",
        yearOfRelease: "2017"
      }
    ],
    Drama: [
      {
        name: "Peaky Blinders",
        rating: "⭐ ⭐ ⭐ ⭐ ⭐",
        yearOfRelease: "2013"
      },
      {
        name: "Dark",
        rating: "⭐ ⭐ ⭐ ⭐ ⭐",
        yearOfRelease: "2017"
      }
    ],
    Thriller: [
      {
        name: "Money Heist",
        rating: "⭐ ⭐ ⭐ ⭐ ⭐",
        yearOfRelease: "2017"
      },
      {
        name: "Ragnarok",
        rating: "⭐ ⭐ ⭐ ⭐",
        yearOfRelease: "2020"
      }
    ]
  };

  var seriesWeKnow = Object.keys(seriesDB);

  const [selectedGenre, setSelectedGenre] = useState("Action");

  function clickEventHandler(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div className="App">
      <h1>Good Web Series to Watch</h1>
      <div> Check Out my Favourite Series by clicking on Genre</div>
      <div style={{ margin: "1rem", borderBottom: "2px solid white" }}>
        {seriesWeKnow.map((genre) => {
          return (
            <button
              key={genre}
              onClick={() => clickEventHandler(genre)}
              style={{
                margin: "0.5rem",
                padding: "0.5rem",
                borderRadius: "0.5rem",
                fontSize: "large",
                cursor: "pointer"
              }}
            >
              {" "}
              {genre}
            </button>
          );
        })}
      </div>
      <div>
        {seriesDB[selectedGenre].map((series, index) => (
          <div className="list" key={index}>
            <p>Name: {series.name}</p>
            <p>Rating: {series.rating}</p>
            <p>Year of Release: {series.yearOfRelease}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
