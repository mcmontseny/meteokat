import moment from "moment";
import localization from "moment/locale/ca";
import WeatherValuesList from "./WeatherValuesList";
import * as utils from "../../lib/utils";

moment.updateLocale("ca", localization);

function CurrentWeather(props: any) {
  const {
    nombre,
    estadoCielo,
    favorite,
    temperatura
  } = props.currentWeather;

  return (
    <div className="flex flex-col mb-4">
      <div className="flex flex-row items-baseline justify-between">
        <p className="text-2xl font-bold pr-2">{nombre}</p>
        <div className="flex flex-row">
          {favorite ? (
            <img
              className="h-5 w-5"
              src="https://cdn-icons-png.flaticon.com/512/929/929417.png"
            />
          ) : (
            <img
              className="h-5 w-5"
              src="https://cdn-icons-png.flaticon.com/512/929/929559.png"
            />
          )}
        </div>
      </div>
      <div className="flex flex-row mb-4 text-xl">
        <p className="text-black capitalize mr-1">{currentTxtDay()},</p>
        <p className="text-[#858585]">{currentHour()}</p>
      </div>
      <img
          className="w-28 h-28 text-center self-center"
          src={utils.getWeatherImgByWeather(estadoCielo)}
        />
      <p className="text-5xl mb-4">{temperatura}°C</p>
      <WeatherValuesList currentWeather={props.currentWeather} />
    </div>
  );
}

export default CurrentWeather;

function currentTxtDay() {
  moment.locale("ca");
  return moment().format("dddd");
}

function currentHour() {
  return moment().format("HH:mm");
}
