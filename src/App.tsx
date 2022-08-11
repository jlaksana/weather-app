import "./App.css";
import Current from "./components/Current";

function App() {
  // const [location, setLocation] = useState("San Luis Obispo");
  // const [data, setData] = useState({});

  // const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=01cef1176e62c3bf636fe8275cc2382d`;
  // const urlHourly = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${location}&units=imperial&appid=01cef1176e62c3bf636fe8275cc2382d`;
  // const urlDaily = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt=5&units=imperial&appid=01cef1176e62c3bf636fe8275cc2382d`;

  return (
    <div className="App">
      <Current
        temperature={80}
        location={"Sacramento"}
        description={"Sunny"}
        high={86}
        low={78}
        feels={75}
      />
    </div>
  );
}

export default App;
