function getWeatherImgByWeather(weather: string) {
  switch (weather) {
    case "81n":
    case "81":
      return "https://cdn-icons-png.flaticon.com/512/929/929417.png";
    default:
      return "https://cdn-icons-png.flaticon.com/512/3093/3093303.png";
  }
}

export { getWeatherImgByWeather };
