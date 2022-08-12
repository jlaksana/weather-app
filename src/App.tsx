/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Current from "./components/Current";
import Sun from "./components/Sun";
import { ICurrentWeather } from "./interfaces.js";

function App() {
  const [location, setLocation] = useState("Sacramento");
  const [data, setData] = useState<ICurrentWeather | undefined>(undefined);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=01cef1176e62c3bf636fe8275cc2382d`;

  useEffect(() => {
    const getCurrentWeather: Function = () => {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
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
        <div>
          <Current
            temperature={data.main.temp}
            location={location}
            description={data.weather[0].main}
            high={data.main.temp_max}
            low={data.main.temp_min}
            feels={data.main.feels_like}
          />
          <Sun sunrise={data.sys.sunrise} sunset={data.sys.sunset} />
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
