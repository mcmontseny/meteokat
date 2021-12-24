import WeatherValueItem from "./WeatherValueItem";

function WeatherValuesList(props: any) {
  const { probPrecipitation, humidity, windSpeed } = props.currentWeather;

  const weatherValues = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3093/3093303.png",
      name: "Precipitació",
      value: probPrecipitation,
      dataType: "%",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3093/3093303.png",
      name: "Humitat",
      value: humidity,
      dataType: "%",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3093/3093303.png",
      name: "Vent",
      value: windSpeed,
      dataType: "km/h",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row sm:space-x-2 lg:flex-col">
        {weatherValues.map((weatherValue) => (
          <WeatherValueItem weatherValue={weatherValue} />
        ))}
      </div>
    </div>
  );
}

export default WeatherValuesList;
