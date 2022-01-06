import type { NextPage } from "next";
import Head from "next/head";
import Search from "../components/Search";
import CurrentWeather from "../components/CurrentWeather";
import FavoritesList from "../components/FavoritesList";
import SummaryCard from "../components/SummaryCard";
import Forecast from "../components/Forecast";
import moment from "moment";

const DEFAULT_CITY = 17193;
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtY21vbnRzZW55LmRldkBnbWFpbC5jb20iLCJqdGkiOiIyNjQ4ZWNlNy1kZGQzLTRiYWUtODkwNC0wMjY0MGIxMmI0NWIiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTYzOTg2NzAxNiwidXNlcklkIjoiMjY0OGVjZTctZGRkMy00YmFlLTg5MDQtMDI2NDBiMTJiNDViIiwicm9sZSI6IiJ9.UVZtA-1Zvg544pK7fraZ4aWw9nf-Dd0h05QufhOU3TU";

const Home: NextPage = (props: any) => {
  const favoriteLocations: any[] = [
    {
      id: 2,
      city: "Sils",
      weather: 1,
      favorite: true,
      temperature: 12,
      probPrecipitation: 35,
      humidity: 27,
      windSpeed: 6,
    },
    {
      id: 3,
      city: "Palafrugell",
      weather: 2,
      favorite: true,
      temperature: 9,
      probPrecipitation: 100,
      humidity: 60,
      windSpeed: 46,
    },
    {
      id: 4,
      city: "Girona",
      weather: 2,
      favorite: true,
      temperature: 6,
      probPrecipitation: 100,
      humidity: 87,
      windSpeed: 12,
    },
    {
      id: 1,
      city: "Santa Coloma de Farners",
      weather: 1,
      favorite: true,
      temperature: -3,
      probPrecipitation: 62,
      humidity: 36,
      windSpeed: 9,
    },
  ];

  return (
    <>
      <Head>
        <title>⛅ Meteokat - Quin temps fa a ...?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col lg:flex-row h-full bg-[#f7f6f9]">
        <div className="flex flex-col bg-white p-6">
          <Search />
          <CurrentWeather currentWeather={props.currentWeather} />
          <FavoritesList favoriteLocations={favoriteLocations} />
        </div>
      </div>
      <div className="flex flex-col flex-1 bg-[#f7f6f9] h-ful p-6">
        <div className="flex flex-row mb-4 items-center justify-between">
          <p className="text-2xl font-bold">El temps</p>
        </div>

        <div className="flex flex-col">
          <div className="grid gap-4 md:grid-cols-2">
            <Forecast
              title="Predicció pròximes hores"
              btnName="Visualitzar més hores"
            >
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 2xl:grid-cols-2 mb-4 sm:mb-6">
                <div className="flex flex-row rounded-lg">
                  <img
                    className="w-8 h-8 self-center mr-4"
                    src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                  />
                  <div className="flex flex-col flex-1">
                    <p className="font-bold text-black text-sm">18:00</p>
                    <div className="flex flex-row flex-wrap">
                      <div className="flex flex-row pr-2 items-center">
                        <p className="text-black text-sm">14°C</p>
                      </div>
                      <div className="flex flex-row pr-2 items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">67%</p>
                      </div>
                      <div className="flex flex-row pr-2 items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">38%</p>
                      </div>
                      <div className="flex flex-row items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">8km/h</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row rounded-lg">
                  <img
                    className="w-8 h-8 self-center mr-4"
                    src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                  />
                  <div className="flex flex-col flex-1">
                    <p className="font-bold text-black text-sm">19:00</p>
                    <div className="flex flex-row flex-wrap">
                      <div className="flex flex-row pr-2 items-center">
                        <p className="text-black text-sm">14°C</p>
                      </div>
                      <div className="flex flex-row pr-2 items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">67%</p>
                      </div>
                      <div className="flex flex-row pr-2 items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">38%</p>
                      </div>
                      <div className="flex flex-row items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">8km/h</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row rounded-lg">
                  <img
                    className="w-8 h-8 self-center mr-4"
                    src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                  />
                  <div className="flex flex-col flex-1">
                    <p className="font-bold text-black text-sm">20:00</p>
                    <div className="flex flex-row flex-wrap">
                      <div className="flex flex-row pr-2 items-center">
                        <p className="text-black text-sm">14°C</p>
                      </div>
                      <div className="flex flex-row pr-2 items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">67%</p>
                      </div>
                      <div className="flex flex-row pr-2 items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">38%</p>
                      </div>
                      <div className="flex flex-row items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">8km/h</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row rounded-lg">
                  <img
                    className="w-8 h-8 self-center mr-4"
                    src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                  />
                  <div className="flex flex-col flex-1">
                    <p className="font-bold text-black text-sm">21:00</p>
                    <div className="flex flex-row flex-wrap">
                      <div className="flex flex-row pr-2 items-center">
                        <p className="text-black text-sm">14°C</p>
                      </div>
                      <div className="flex flex-row pr-2 items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">67%</p>
                      </div>
                      <div className="flex flex-row pr-2 items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">38%</p>
                      </div>
                      <div className="flex flex-row items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">8km/h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Forecast>

            <Forecast title="Predicció 7 dies" btnName="Visualitzar més dies">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 2xl:grid-cols-2  mb-4 sm:mb-6">
                <div className="flex flex-row rounded-lg">
                  <img
                    className="w-8 h-8 self-center mr-4"
                    src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                  />
                  <div className="flex flex-col flex-1">
                    <p className="font-bold text-black text-sm">
                      <span className="text-[#858585]">Dj,</span> 23 desembre
                    </p>
                    <div className="flex flex-row flex-wrap">
                      <div className="flex flex-row pr-2 items-center">
                        <p className="text-blue-600 pr-1 text-sm font">-3°C</p>
                        <p className="text-red-600 text-sm">14°C</p>
                      </div>
                      <div className="flex flex-row pr-2 items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">67%</p>
                      </div>
                      <div className="flex flex-row pr-2 items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">38%</p>
                      </div>
                      <div className="flex flex-row items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">8km/h</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row rounded-lg">
                  <img
                    className="w-8 h-8 self-center mr-4"
                    src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                  />
                  <div className="flex flex-col flex-1">
                    <p className="font-bold text-black text-sm">
                      <span className="text-[#858585]">Dv,</span> 24 desembre
                    </p>
                    <div className="flex flex-row flex-wrap">
                      <div className="flex flex-row pr-2 items-center">
                        <p className="text-blue-600 pr-1 text-sm font">-3°C</p>
                        <p className="text-red-600 text-sm">14°C</p>
                      </div>
                      <div className="flex flex-row pr-2 items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">67%</p>
                      </div>
                      <div className="flex flex-row pr-2 items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">38%</p>
                      </div>
                      <div className="flex flex-row items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">8km/h</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row rounded-lg">
                  <img
                    className="w-8 h-8 self-center mr-4"
                    src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                  />
                  <div className="flex flex-col flex-1">
                    <p className="font-bold text-black text-sm">
                      <span className="text-[#858585]">Ds,</span> 25 desembre
                    </p>
                    <div className="flex flex-row flex-wrap">
                      <div className="flex flex-row pr-2 items-center">
                        <p className="text-blue-600 pr-1 text-sm font">-3°C</p>
                        <p className="text-red-600 text-sm">14°C</p>
                      </div>
                      <div className="flex flex-row pr-2 items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">67%</p>
                      </div>
                      <div className="flex flex-row pr-2 items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">38%</p>
                      </div>
                      <div className="flex flex-row items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">8km/h</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row rounded-lg">
                  <img
                    className="w-8 h-8 self-center mr-4"
                    src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                  />
                  <div className="flex flex-col flex-1">
                    <p className="font-bold text-black text-sm">
                      <span className="text-[#858585]">Dg,</span> 26 desembre
                    </p>
                    <div className="flex flex-row flex-wrap">
                      <div className="flex flex-row pr-2 items-center">
                        <p className="text-blue-600 pr-1 text-sm font">-3°C</p>
                        <p className="text-red-600 text-sm">14°C</p>
                      </div>
                      <div className="flex flex-row pr-2 items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">67%</p>
                      </div>
                      <div className="flex flex-row pr-2 items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">38%</p>
                      </div>
                      <div className="flex flex-row items-center">
                        <img
                          className="h-3 pr-1"
                          src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                        />
                        <p className="text-sm">8km/h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Forecast>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-xl font-bold mb-4">El més destacat d'avui</p>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <SummaryCard title="Índex ultraviolat (UVI)">
              <div className="flex flex-row pb-2">
                <img
                  className="w-10 h-10 self-end"
                  src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                />
                <p className="pl-4 self-end text-4xl text-black">3</p>
                <p className="self-end text-xl text-[#858585]">/12</p>
              </div>
              <div className="flex flex-row items-center">
                <div className="h-3 w-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-2"></div>
                <p className="text-base text-[#858585] self-end">Baix</p>
              </div>
            </SummaryCard>
            <SummaryCard title="Estat del vent">
              <div className="flex flex-row pb-2">
                <img
                  className="w-10 h-10 self-end"
                  src="https://cdn-icons-png.flaticon.com/512/3093/3093317.png"
                />
                <p className="pl-4 pr-2 self-end text-4xl text-black">17.4</p>
                <p className="self-end text-xl text-[#858585]">km/h</p>
              </div>
              <div className="flex flex-row">
                <img
                  className="h-5 mr-2 self-end"
                  src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                />
                <p className="text-base text-[#858585] self-end">SSE</p>
              </div>
            </SummaryCard>
            <SummaryCard title="Sortida i posta de sol">
              <div className="flex flex-row pb-2">
                <div className="flex flex-row mr-2">
                  <img
                    className="w-10 h-10"
                    src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                  />
                  <div className="flex flex-col ml-2">
                    <p className="text-black font-bold">06:35</p>
                    <p className="text-sm text-[#858585]">-1m 46s</p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <img
                    className="w-10 h-10"
                    src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                  />
                  <div className="flex flex-col ml-2">
                    <p className="text-black font-bold">17:42</p>
                    <p className="text-sm text-[#858585]">+2m 22s</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-base text-[#858585] self-end">
                  11 hores i 7 minuts de llum
                </p>
              </div>
            </SummaryCard>
            <SummaryCard title="Humitat">
              <div className="flex flex-row pb-2">
                <img
                  className="w-10 h-10 self-end"
                  src="https://cdn-icons-png.flaticon.com/512/3093/3093303.png"
                />
                <p className="pl-4 self-end text-4xl text-black mr-2">23</p>
                <p className="self-star text-xl text-[#858585]">%</p>
              </div>
              <div className="flex flex-row items-center">
                <div className="h-3 w-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-2"></div>
                <p className="text-base text-[#858585] self-end">Normal</p>
              </div>
            </SummaryCard>
            <SummaryCard title="Visibilitat">
              <div className="flex flex-row pb-2">
                <p className="self-end text-4xl text-black mr-2">5.2</p>
                <p className="self-end text-xl text-[#858585]">km</p>
              </div>
              <div className="flex flex-row items-center">
                <div className="h-3 w-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-2"></div>
                <p className="text-base text-[#858585] self-end">
                  Bona visibilitat
                </p>
              </div>
            </SummaryCard>
            <SummaryCard title="Qualitat de l'aire">
              <div className="flex flex-row pb-2">
                <p className="self-end text-4xl text-black mr-2">105</p>
              </div>
              <div className="flex flex-row items-center">
                <div className="h-3 w-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mr-2"></div>
                <p className="text-base text-[#858585] self-end">
                  No saludable
                </p>
              </div>
            </SummaryCard>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const weatherByHoursAPI =
    "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/horaria/";
  const weatherByDaysAPI =
    "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/";
  const params = `${DEFAULT_CITY}?api_key=${API_KEY}`;

  const dataByHoursAMET = await fetch(`${weatherByHoursAPI}${params}`).then(
    (response) => response.json()
  );

  const dataByDaysAMET = await fetch(`${weatherByDaysAPI}${params}`).then(
    (response) => response.json()
  );

  const weatherByHours = await fetch(dataByHoursAMET.datos).then((response) =>
    response.json()
  );
  const weatherByDays = await fetch(dataByDaysAMET.datos).then((response) =>
    response.json()
  );

  const mappedWeatherByHours: any = getWeatherByHours(weatherByHours);

  const actualDay = +moment().format('D');
  const actualHour = +moment().format('HH');

  const mappedCurrentWeather: any = mappedWeatherByHours.get(actualDay).get(actualHour);
  mappedCurrentWeather['favorite'] = false;
  return {
    props: {
      weatherByHours,
      weatherByDays,
      currentWeather: {...mappedCurrentWeather},
    },
  };
}

export function getWeatherByHours(weatherByHours: any) {
  const days = new Map(); // Map dies de la setmana

  const { id, elaborado, nombre, provincia, prediccion } = weatherByHours[0];

  prediccion.dia.map((day: any, index: number) => {
    const keyDay = +moment(day.fecha).format("D");

    if (keyDay !== +moment().format("D") && index === 0) return; // Si el primer dia no es l'actual ignorem.

    const hours = new Map(); // Map hores del dia
    let hour: number = index === 0 ? +moment().format("HH") : 0;

    while (hour < 24) {
      const hourInfo = { ...day, id, elaborado, nombre, provincia };
      for (const key of Object.keys(hourInfo)) {
        if (!Array.isArray(hourInfo[key])) break;
        hourInfo[key] = hourInfo[key].find((el: any) => {
          if (el.periodo.length !== 2) {
            // Si el periode és rang hores
            const [initHour, lastHour] = [
              +el.periodo.slice(0, 2),
              +el.periodo.slice(2),
            ];
            return hour === 0 || (hour >= initHour && hour <= lastHour);
          }
          return +el.periodo === hour; // Si el periode és una hora concreta
        });
      }

      // Si tenim valors undefined, no guardem
      if (!Object.values(hourInfo).includes(undefined)) {
        hours.set(hour, hourInfo);
      }

      hour++;
    }
    days.set(keyDay, hours); // Key dia de les dades. Val: Informació de les hores.
  });
  return days;
}

export default Home;
