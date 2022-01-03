import WeatherValueItem from "./WeatherValueItem";

function WeatherValuesList(props: any) {
  const { probPrecipitacion, humedadRelativa, vientoAndRachaMax } = props.currentWeather;

  const weatherValues = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3093/3093303.png",
      name: "Precipitació",
      value: probPrecipitacion,
      dataType: "%",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3093/3093303.png",
      name: "Humitat",
      value: humedadRelativa,
      dataType: "%",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3093/3093303.png",
      name: "Vent",
      value: vientoAndRachaMax,
      dataType: "km/h",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row sm:space-x-2 lg:space-x-0 lg:flex-col">
        {weatherValues.map((weatherValue) => (
          <WeatherValueItem weatherValue={weatherValue} />
        ))}
      </div>
    </div>
  );
}

export default WeatherValuesList;
