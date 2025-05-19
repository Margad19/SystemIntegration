import axios from "axios";

//const openWeatherAPI = process.env.REACT_APP_OPEN_WEATHER_API;
const openWeatherAPI = "7adf6132b0a058a1ffd93b834f74cc42";
const baseURL = "https://api.openweathermap.org/data/2.5/onecall?";

export const getWeather = async (lat, lng) => {
  try {
    const { data } = await axios.get(baseURL, {
      params: {
        lat,
        lon: lng,
        exclude: "current,hourly,minutely,alerts",
        units: "metric",
        appid: openWeatherAPI,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};
//console.log("WeatherAPI Key:", openWeatherAPI);