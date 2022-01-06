import WeatherItem from "./WeatherItem";
export default function WeatherList({ data }: any) {
  return (
    <>
      {data.map((item: any, index: number) => (
        <WeatherItem data={item} key={index} />
      ))}
    </>
  );
}
