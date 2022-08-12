import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { FC } from "react";
import { CurrentProps } from "../interfaces.js";
import "../styles/Current.css";

const Current: FC<CurrentProps> = (props) => {
  const date: Date = new Date();

  return (
    <div className="currentWeather">
      <p className="location">
        <LocationOnOutlinedIcon />
        {props.location}
      </p>
      <div className="temperature">
        {props.temperature.toFixed()}
        <div className="f">°F</div>
      </div>
      <p className="description">{props.description}</p>
      <p className="hilo">
        {props.low.toFixed()}° / {props.high.toFixed()}° Feels like{" "}
        {props.feels.toFixed()}°
      </p>
      <p className="date">{date.toDateString()}</p>
    </div>
  );
};

export default Current;
