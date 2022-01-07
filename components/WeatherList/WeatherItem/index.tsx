import * as utils from "../../../lib/utils";
import moment from "moment";
import localization from "moment/locale/ca";
moment.updateLocale("ca", localization);
import getConfig from "next/config";
const {
  publicRuntimeConfig: { IMG_PATH },
} = getConfig();

export default function WeatherItem({ data, type }: any) {
  const {
    hour,
    estadoCielo,
    probPrecipitacion,
    vientoAndRachaMax,
    viento,
    humedadRelativa,
    fecha,
    temperatura,
  } = data;

  const weatherValues = [
    type === "hours"
      ? {
          value: temperatura.value,
          dataType: "°C",
        }
      : {
          multiVal: true,
          minVal: temperatura.minima,
          maxVal: temperatura.maxima,
          dataType: "°C",
        },
    {
      icon: `${IMG_PATH}umbrella.png`,
      value: probPrecipitacion.value,
      dataType: "%",
    },
    {
      icon: `${IMG_PATH}humidity.png`,
      value: type === "days" ? humedadRelativa.promedio : humedadRelativa.value,
      dataType: "%",
    },
    {
      icon: `${IMG_PATH}wind.png`,
      value:
        type === "days" ? viento.velocidad : vientoAndRachaMax.velocidad[0],
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
            {type === "hours" && utils.getHourInTxt(hour)}
            {type === "days" && (
              <span>
                <span className="text-[#858585] capitalize">
                  {getDayWeekTxtByDate(fecha)}{" "}
                </span>
                {getDayAndMonthByDate(fecha)}
              </span>
            )}
          </p>
          <div className="flex flex-row flex-wrap">
            {weatherValues.map((el: any, index: number) => (
              <div
                className={`flex flex-row items-center ${
                  index !== weatherValues.length - 1 ? "pr-2" : ""
                }`}
                key={index}
              >
                {el.icon && <img className="h-3 pr-1" src={el.icon} />}
                {!el.multiVal ? (
                  <p className="text-sm">
                    {el.value}
                    {el.dataType}
                  </p>
                ) : (
                  <div className="flex flex-row items-center">
                    <p className="text-blue-600 pr-1 text-sm font">{el.minVal}{el.dataType}</p>
                    <p className="text-red-600 text-sm">{el.maxVal}{el.dataType}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function getDayAndMonthByDate(date: string) {
  return moment(date).format("DD MMMM");
}

function getDayWeekTxtByDate(date: string) {
  return moment(date).format("ddd");
}
