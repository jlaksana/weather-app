import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { FC } from "react";
import "../styles/Current.css";

interface CurrentProps {
  temperature: number;
  location: string;
  description: string;
  high: number;
  low: number;
  feels: number;
}

const Current: FC<CurrentProps> = (props) => {
  return (
    <div className="currentWeather">
      <p className="location">
        <LocationOnOutlinedIcon />
        {props.location}
      </p>
      <div className="temperature">
        <strong>{props.temperature}</strong>
        <div className="f">°F</div>
      </div>
      <p className="description">{props.description}</p>
      <p className="hilo">
        {props.low}° / {props.high}° Feels like {props.feels}°
      </p>
      <p className="date">Wed, August 10, 2022</p>
    </div>
  );
};

export default Current;
