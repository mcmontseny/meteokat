function FavoriteItem(props: any) {
  const {
    city,
    temperature,
    weather,
    probPrecipitation,
    humidity,
    windSpeed,
  } = props.location;

  return (
    <div className="flex flex-row bg-[#f7f6f9] rounded-lg p-2 shadow-md w-100">
      {weather === 1 ? (
        <img
          className="w-8 h-8 mr-4 self-center"
          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
        />
      ) : (
        <img
          className="w-8 h-8 mr-4 self-center"
          src="https://cdn-icons-png.flaticon.com/512/3093/3093313.png"
        />
      )}

      <div className="flex flex-col flex-1">
        <div className="flex flex-row justify-between">
          <p className="font-bold text-sm">{city}</p>
          <img
            className="h-4"
            src="https://cdn-icons-png.flaticon.com/512/929/929417.png"
          />
        </div>
        <div className="flex flex-row flex-wrap">
          <div className="flex flex-row pr-1 items-center">
            <p className="text-sm">{temperature}°C</p>
          </div>
          <div className="flex flex-row pr-1 items-center">
            <img
              className="h-3 pr-1"
              src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
            />
            <p className="text-sm">{probPrecipitation}%</p>
          </div>
          <div className="flex flex-row pr-1 items-center">
            <img
              className="h-3 pr-1"
              src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
            />
            <p className="text-sm">{humidity}%</p>
          </div>
          <div className="flex flex-row items-center">
            <img
              className="h-3 pr-1"
              src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
            />
            <p className="text-sm">{windSpeed}km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteItem;
