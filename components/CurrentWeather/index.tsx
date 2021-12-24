import moment from "moment";
import localization from "moment/locale/ca";
import WeatherValuesList from "./WeatherValuesList";

moment.updateLocale("ca", localization);

function CurrentWeather(props: any) {
  const {
    city,
    weather,
    favorite,
    temperature,
    probPrecipitation,
    humidity,
    windSpeed,
  } = props.currentWeather;

  return (
    <div className="flex flex-col mb-4">
      <div className="flex flex-row items-baseline justify-between">
        <p className="text-2xl font-bold pr-2">{city}</p>
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
        <p className="text-black capitalize">{currentTxtDay()},</p>
        <p className="text-[#858585]">{currentHour()}</p>
      </div>
      {weather === 1 ? (
        <img
          className="w-28 h-28 text-center self-center"
          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
        />
      ) : (
        <img
          className="w-28 h-28 text-center self-center"
          src="https://cdn-icons-png.flaticon.com/512/3093/3093313.png"
        />
      )}
      <p className="text-5xl mb-4">{temperature}°C</p>
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
