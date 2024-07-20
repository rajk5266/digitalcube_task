import axios from "axios";

export const fetchWeatherData = async (cityName) => {
    console.log(cityName)
    if(!cityName.label){
        return null
    }
const {label} = cityName;
const city = label?.toLowerCase();

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb2f8cf08c959069972b380e38041a73`
    );
    return response.data;

  } catch (error) {
    console.log("Error fetching weather data:", error);
    // throw error;
  }
};


const API_KEY = 'fb2f8cf08c959069972b380e38041a73';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';


const fetchForecastData = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}`;
  try {
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error('Failed to fetch forecast data');
    }
    const data = response.data;
    return parseForecastData(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

const parseForecastData = (data) => {
  const labels = data.list.map(item => item.dt_txt);
  const temperatures = data.list.map(item => item.main.temp);
  
  return {
    labels,
    temperatures,
  };
};

export default fetchForecastData;