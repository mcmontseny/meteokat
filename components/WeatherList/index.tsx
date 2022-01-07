import WeatherItem from "./WeatherItem";
export default function WeatherList({ data, type }: any) {
  return (
    <>
      {data.map((item: any, index: number) => (
        <WeatherItem data={item} type={type} key={index} />
      ))}
    </>
  );
}
