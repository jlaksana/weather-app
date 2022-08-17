/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState } from "react";
import "./App.css";
import Current from "./components/Current";
import Daily from "./components/Daily";
import Extra from "./components/Extra";
import Search from "./components/Search";
import Sun from "./components/Sun";
import { ICurrentWeather, IDailyWeather, ISearchData } from "./interfaces.js";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState<ICurrentWeather | undefined>(undefined);
  const [daily, setDaily] = useState<IDailyWeather | undefined>(undefined);

  const handleOnSearchChange = (searchData: ISearchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=01cef1176e62c3bf636fe8275cc2382d`;

    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLocation(searchData.label);
      })
      .catch((err) => {
        console.log(err);
      });

    const dailyUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=01cef1176e62c3bf636fe8275cc2382d`;

    axios
      .get(dailyUrl)
      .then((res) => {
        setDaily(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!data) {
    handleOnSearchChange({
      value: "35.38 -120.45",
      label: "San Luis Obispo County, CA",
    });
  }

  const isDay: Function = (): Boolean => {
    if (!data) return true;

    const currentMoment = new Date();
    const sunrise = new Date(data.sys.sunrise * 1000);
    const sunset = new Date(data.sys.sunset * 1000);

    return sunrise <= currentMoment && currentMoment < sunset;
  };

  return (
    <div className={`App ${isDay() ? "day" : "night"}`}>
      <Search onSearchChange={handleOnSearchChange} />
      {data ? (
        <div className="content">
          <Current
            temperature={data.main.temp}
            location={location}
            description={data.weather[0].main}
            high={data.main.temp_max}
            low={data.main.temp_min}
            feels={data.main.feels_like}
          />
          {daily ? <Daily list={daily.list} /> : null}
          <Sun sunrise={data.sys.sunrise} sunset={data.sys.sunset} />
          <Extra
            humidity={data.main.humidity}
            wind={data.wind.speed}
            visibility={data.visibility}
            rain={data.rain ? data.rain["1h"] : undefined}
            snow={data.snow ? data.snow["1h"] : undefined}
          />
          <p className="caption">Developed by Jonathan Laksana Aug 2022</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
