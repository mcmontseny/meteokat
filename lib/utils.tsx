import getConfig from "next/config";
const {
  publicRuntimeConfig: { IMG_PATH },
} = getConfig();

function getWeatherImgByWeather(weather: string) {
  switch (weather) {
    case "11": // Despejado
      return `${IMG_PATH}sun.png`;
    case "11n": // Despejado noche
      return `${IMG_PATH}moon.png`;
    case "12": // Poco nuboso
      return `${IMG_PATH}cloudy.png`;
    case "12n": // Poco nuboso noche
      return `${IMG_PATH}cloudy-night-2.png`;
    case "13": // Intervalos nubosos
      return `${IMG_PATH}cloudy.png`;
    case "13n": // Intervalos nubosos noche
      return `${IMG_PATH}cloudy-night-2.png`;
    case "15": // Muy nuboso
      return `${IMG_PATH}clouds.png`;
    case "15n": // Muy nuboso noche
      return `${IMG_PATH}cloudy-night.png`;
    case "16": // Cubierto
      return `${IMG_PATH}clouds.png`;
    case "16n": // Cubierto noche
      return `${IMG_PATH}cloudy-night.png`;
    case "17": // Nubes altas
      return `${IMG_PATH}cloudy.png`;
    case "17n": // Nubes altas noche
      return `${IMG_PATH}cloudy-night-2.png`;
    case "46": // Cubierto con lluvia escasa
      return `${IMG_PATH}rain.png`;
    case "46n": // Cubierto con lluvia escasa noche
      return `${IMG_PATH}rain-night.png`;
    default:
      return `${IMG_PATH}no-img.png`;
  }
}

function getHourInTxt(hour: number) {
  return `${("" + hour).padStart(2, "0")}:00`;
}

export { getWeatherImgByWeather, getHourInTxt };
