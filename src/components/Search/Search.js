import React from "react";
import { Input, Button } from "@mui/material";
import style from "./Search.module.css";

const Search = ({ input, setInput, findWeather }) => {
  const functionCall = (event) => {
    event.preventDefault();
    findWeather();
  };

  return (
    <div className={style.container}>
      <video src="../video/particles.mp4" muted="" autoPlay=""></video>
      <h1>
        <span>L</span>iv<span>e</span> W<span>e</span>at<span>he</span>r
      </h1>
      <img
        src="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-20.png"
        alt="logo"
      />
      <form>
        <Input
          placeholder="Enter Your City Name"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <br />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={functionCall}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
