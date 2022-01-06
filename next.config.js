/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    IMG_PATH: '/img/', // Ruta de les imatges, l'arrel es public
    DEFAULT_CITY: 17193, // Municipi per defecte
    API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtY21vbnRzZW55LmRldkBnbWFpbC5jb20iLCJqdGkiOiIyNjQ4ZWNlNy1kZGQzLTRiYWUtODkwNC0wMjY0MGIxMmI0NWIiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTYzOTg2NzAxNiwidXNlcklkIjoiMjY0OGVjZTctZGRkMy00YmFlLTg5MDQtMDI2NDBiMTJiNDViIiwicm9sZSI6IiJ9.UVZtA-1Zvg544pK7fraZ4aWw9nf-Dd0h05QufhOU3TU", // API-KEY AEMET (Pasar a dot.env)
    AEMET_API_URL: "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio", // Path general crides api AEMET
    AEMET_API_DAILY_URL: "/diaria/", // Path info per dia
    AEMET_API_HOURLY_URL: "/horaria/", // Path info per hores
  }
}
