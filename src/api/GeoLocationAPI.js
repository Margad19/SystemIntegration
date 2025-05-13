import axios from "axios";

//const ipGeo = process.env.REACT_APP_GEO_API;
//console.log("GeoLocationAPI Key:", ipGeo);
const ipGeo = "ipb_live_vwmvIxhzeYTDQig8alhkWUat5nGZsuf3cWrjRI4a";
const baseURL = "https://api.ipbase.com/v2/info?apikey=";

export const geoLocationData = async () => {
  try {
    const { data } = await axios.get(baseURL + ipGeo);
    return data;
  } catch (error) {
    return error;
  }
};
