import getConfig from 'next/config'
const { publicRuntimeConfig: {IMG_PATH} } = getConfig();

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
    case "15": // Muy nuboso
      return `${IMG_PATH}clouds.png`;
    case "15n": // Muy nuboso noche
      return `${IMG_PATH}cloudy-night.png`;
    default:
      return `${IMG_PATH}no-img.png`;
  }
}

function getHourInTxt(hour: number) {
  return `${(''+hour).padStart(2, "0")}:00`
}

export { getWeatherImgByWeather, getHourInTxt };
