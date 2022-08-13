/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Current from "./components/Current";
import Extra from "./components/Extra";
import Sun from "./components/Sun";
import { ICurrentWeather } from "./interfaces.js";

function App() {
  const [location, setLocation] = useState("Phoenix");
  const [data, setData] = useState<ICurrentWeather | undefined>(undefined);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=01cef1176e62c3bf636fe8275cc2382d`;

  useEffect(() => {
    const getCurrentWeather: Function = () => {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (location !== "") getCurrentWeather();
  }, [location]);

  return (
    <div className="App">
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
          <Sun sunrise={data.sys.sunrise} sunset={data.sys.sunset} />
          <Extra
            humidity={data.main.humidity}
            wind={data.wind.speed}
            visibility={data.visibility}
            rain={data.rain ? data.rain["1h"] : undefined}
            snow={data.snow ? data.snow["1h"] : undefined}
          />
        </div>
      ) : (
        <Current
          temperature={76}
          location={location}
          description={"~Sunny~"}
          high={80}
          low={74}
          feels={76}
        />
      )}
    </div>
  );
}

export default App;
