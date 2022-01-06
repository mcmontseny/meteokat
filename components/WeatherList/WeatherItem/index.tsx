import * as utils from "../../../lib/utils";
import getConfig from "next/config";
const {
  publicRuntimeConfig: { IMG_PATH },
} = getConfig();

export default function WeatherItem({ data }: any) {
  const {
    hour,
    estadoCielo,
    probPrecipitacion,
    vientoAndRachaMax,
    humedadRelativa,
    temperatura,
  } = data;

  const weatherValues = [
    {
      value: temperatura.value,
      dataType: "°C",
    },
    {
      icon: `${IMG_PATH}umbrella.png`,
      value: probPrecipitacion.value,
      dataType: "%",
    },
    {
      icon: `${IMG_PATH}humidity.png`,
      value: humedadRelativa.value,
      dataType: "%",
    },
    {
      icon: `${IMG_PATH}wind.png`,
      value: vientoAndRachaMax.velocidad[0],
      dataType: "km/h",
    },
  ];

  return (
    <>
      <div className="flex flex-row rounded-lg">
        <img
          className="w-8 h-8 self-center mr-4"
          src={utils.getWeatherImgByWeather(estadoCielo.value)}
        />
        <div className="flex flex-col flex-1">
          <p className="font-bold text-black text-sm">
            {utils.getHourInTxt(hour)}
          </p>
          <div className="flex flex-row flex-wrap">
            {weatherValues.map((el, index) => (
              <div className={`flex flex-row items-center ${index !== weatherValues.length-1 ? 'pr-2' : ''}`} key={index}>
                { el.icon && <img
                  className="h-3 pr-1"
                  src={el.icon}
                /> }
                <p className="text-sm">{el.value}{el.dataType}</p>
              </div>
            ))}

            {/* 
            <div className="flex flex-row pr-2 items-center">
              <p className="text-black text-sm">{temperatura.value}°C</p>
            </div> */}
            {/* <div className="flex flex-row pr-2 items-center">
              <img
                className="h-3 pr-1"
                src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
              />
              <p className="text-sm">{probPrecipitacion.value}%</p>
            </div> */}
            {/* <div className="flex flex-row pr-2 items-center">
              <img
                className="h-3 pr-1"
                src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
              />
              <p className="text-sm">{humedadRelativa.value}%</p>
            </div>
            <div className="flex flex-row items-center">
              <img
                className="h-3 pr-1"
                src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
              />
              <p className="text-sm">{vientoAndRachaMax.velocidad[0]}km/h</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
