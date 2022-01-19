import React, { useState } from "react";
import style from "./App.module.css";
import Search from "./components/Search/Search";
import axios from "axios";
import Card from "./components/Card/Card";

const App = () => {
  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [city, setCity] = useState("");
  const [sunSet, setSunSet] = useState();

  const findWeather = async () => {
    const apiKey = "c1d64b527b83a1cb81bccc39f1bdd9bf";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`;
    const response = await axios.get(url);
    console.log(response);
    const temp = await response.data.main.temp;
    const heat = await response.data.main.humidity;
    const desc = await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const speed = await response.data.wind.speed;
    const citys = await response.data.name;
    const sunSet = await response.data.sys.sunset;
    setInput("");
    setTemp(temp);
    setDesc(desc);
    setIcon(imageUrl);
    setHumidity(heat);
    setWind(speed);
    setCity(citys);
    setSunSet(sunSet);
  };

  return (
    <div className={style.container}>
      {temp === "" ? (
        <Search input={input} setInput={setInput} findWeather={findWeather} />
      ) : (
        <Card
          setTemp={setTemp}
          temp={temp}
          desc={desc}
          image={icon}
          city={city}
          heat={humidity}
          speed={wind}
          sunSet={sunSet}
        />
      )}
    </div>
  );
};

export default App;
