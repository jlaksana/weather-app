import { FC } from "react";
import { DailyProps, IDailyWeather } from "../interfaces.js";
import "../styles/Daily.css";

const Daily: FC<DailyProps> = (props) => {
  const filterProps: Function = () => {
    const data: Array<IDailyWeather> = props.list.slice(5).filter((el, idx) => {
      return idx % 8 === 0;
    });
    return data;
  };
  const data = filterProps(props.list);
  // const [data, setData] = useState<Array<IDailyWeather> | undefined>(undefined);

  const getDayFromUTC: Function = (utc: number) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dt = new Date(utc * 1000);
    return days[dt.getDay()];
  };

  return (
    <div className="dailyWeather">
      {data?.map((day: IDailyWeather) => (
        <div className="dayCard">
          <p>{getDayFromUTC(day.dt)}</p>
          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt="icon"
            width="50px"
            height="50px"
          />
          <p>{day.weather[0].main}</p>
          <p>{day.main.temp.toFixed()}°</p>
        </div>
      ))}
    </div>
  );
};

export default Daily;
