import WeatherList from "../WeatherList";
const NUMBER_ITEMS = 4;

function Forecast({ children, title, btnName, data }: any) {
  const items = data.slice(0,NUMBER_ITEMS);
  return (
    <div className="flex flex-col mb-0 justify-between">
      <div className="flex flex-col">
        <p className="text-xl font-bold flex-1 mb-4">{title}</p>
      </div>
      <div className="flex flex-col justify-between rounded-lg mb-4 p-4 shadow-md bg-white h-full">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 2xl:grid-cols-2 mb-4 sm:mb-6">
          <WeatherList data={items}/>
        </div>
        <div className="flex flex-col flex-1 justify-end">
          <div className="w-full sm:w-2/3 sm:self-center bg-[#858585]/10 rounded-lg text-center py-1 shadow-md" onClick={handleClick}>
            <p className="text-base font-bold text-black">{btnName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function handleClick() {
  alert('Detall meteorològic no disponible');
}

export default Forecast;
