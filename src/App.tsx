/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Current from "./components/Current";
import { ICurrentWeather } from "./interfaces.js";

function App() {
  const [location, setLocation] = useState("Sacramento");
  const [currentData, setCurrentData] = useState<ICurrentWeather | undefined>(
    undefined
  );

  const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=01cef1176e62c3bf636fe8275cc2382d`;
  // const urlHourly = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${location}&units=imperial&appid=01cef1176e62c3bf636fe8275cc2382d`;
  // const urlDaily = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt=5&units=imperial&appid=01cef1176e62c3bf636fe8275cc2382d`;

  useEffect(() => {
    const getCurrentWeather: Function = () => {
      axios
        .get(urlCurrent)
        .then((res) => {
          setCurrentData(res.data);
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
      {currentData ? (
        <Current
          temperature={currentData.main.temp}
          location={location}
          description={currentData.weather[0].description}
          high={currentData.main.temp_max}
          low={currentData.main.temp_min}
          feels={currentData.main.feels_like}
        />
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
