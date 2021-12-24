function WeatherValueItem(props: any) {  
    const { icon, name, value, dataType} = props.weatherValue;
    return (
        <div className="flex flex-row text-base">
        <img
          className="h-5 mb-2 mr-2"
          src={icon}
        />
        <p>
          {name}:{" "}
          <span className="text-[#858585]">{value}{dataType}</span>
        </p>
      </div>
    );
  }
  
  export default WeatherValueItem;