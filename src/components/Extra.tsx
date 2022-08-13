import AcUnitIcon from "@mui/icons-material/AcUnit";
import AirIcon from "@mui/icons-material/Air";
import GrainIcon from "@mui/icons-material/Grain";
import OpacityIcon from "@mui/icons-material/Opacity";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { FC } from "react";
import { ExtraProps } from "../interfaces.js";
import "../styles/Extra.css";

const Extra: FC<ExtraProps> = (props) => {
  let precipitation;
  if (props.rain) {
    precipitation = (
      <div className="precipitation">
        <GrainIcon fontSize="large" />
        RAIN
        <p>{props.rain} mm</p>
      </div>
    );
  } else if (props.snow) {
    precipitation = (
      <div className="precipitation">
        <AcUnitIcon fontSize="large" />
        SNOW
        <p>{props.snow} mm</p>
      </div>
    );
  } else {
    precipitation = (
      <div className="precipitation">
        <WbSunnyIcon fontSize="large" />
        Clear
      </div>
    );
  }

  return (
    <div className="extra">
      {precipitation}
      <div className="humidity">
        <OpacityIcon fontSize="large" />
        HUMIDITY
        <p>{props.humidity}%</p>
      </div>
      <div className="wind">
        <AirIcon fontSize="large" />
        WIND
        <p>{props.wind.toFixed()} mph</p>
      </div>
    </div>
  );
};

export default Extra;
