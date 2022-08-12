import { FC } from "react";
import rise from "../assets/sunrise.svg";
import set from "../assets/sunset.svg";
import { SunProps } from "../interfaces.js";
import "../styles/Sun.css";

const Sun: FC<SunProps> = (props) => {
  const sunrise: Date = new Date(props.sunrise * 1000);
  const sunset: Date = new Date(props.sunset * 1000);

  const getLocaleTimeString: Function = (date: Date): string => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="sun">
      <div className="rise">
        <img src={rise} alt="sunrise" />
        <p>SUNRISE</p>
        {getLocaleTimeString(sunrise)}
      </div>
      <div className="set">
        <img src={set} alt="sunset" />
        <p>SUNSET</p>
        {getLocaleTimeString(sunset)}
      </div>
    </div>
  );
};

export default Sun;
