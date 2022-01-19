import React from "react";
import style from "./Card.module.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import InvertColorsOutlinedIcon from "@mui/icons-material/InvertColorsOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

const Card = ({ setTemp, city, heat, speed, desc, image, temp, sunSet }) => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <button
          className={style.back}
          type="submit"
          onClick={() => setTemp("")}
        >
          <ArrowBackIosNewOutlinedIcon />
        </button>

        <h3 className={style.name}>{city}</h3>
      </div>
      <img src={image} alt="image" />
      <strong className={style.desc}>{desc}</strong>
      <div className={style.border}>
        <div className={style.ul}>
          <strong>
            <AirOutlinedIcon />
            <p>{Math.floor(speed * 18) / 5} Km/hr</p>
          </strong>
          <strong>
            <InvertColorsOutlinedIcon />
            <p>{heat} %</p>
          </strong>
          <strong>
            <WbSunnyOutlinedIcon />
            <p>{new Date(sunSet * 1000).toLocaleTimeString()} </p>
          </strong>
        </div>

        <h1>{Math.floor(temp - 273.15)}°</h1>
      </div>
    </div>
  );
};

export default Card;
