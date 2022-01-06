import WeatherValueItem from "./WeatherValueItem";
import getConfig from "next/config";
const {
  publicRuntimeConfig: { IMG_PATH },
} = getConfig();

function WeatherValuesList(props: any) {
  const { probPrecipitacion, humedadRelativa, vientoAndRachaMax } =
    props.currentWeather;

  const weatherValues = [
    {
      icon: `${IMG_PATH}umbrella.png`,
      name: "Precipitació",
      value: probPrecipitacion.value,
      dataType: "%",
    },
    {
      icon: `${IMG_PATH}humidity.png`,
      name: "Humitat",
      value: humedadRelativa.value,
      dataType: "%",
    },
    {
      icon: `${IMG_PATH}wind.png`,
      name: "Vent",
      value: vientoAndRachaMax.velocidad[0],
      dataType: "km/h",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row sm:space-x-2 lg:space-x-0 lg:flex-col">
        {weatherValues.map((weatherValue, index) => (
          <WeatherValueItem weatherValue={weatherValue} key={index} />
        ))}
      </div>
    </div>
  );
}

export default WeatherValuesList;
