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
