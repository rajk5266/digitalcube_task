import axios from "axios";

const API_KEY = 'fb2f8cf08c959069972b380e38041a73'; 


export const fetchWeatherData = async (cityName) => {
  console.log(cityName)
  if (!cityName.label) {
    return null
  }
  const { label } = cityName;
  const city = label?.toLowerCase();

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;

  } catch (error) {
    console.log("Error fetching weather data:", error);
    throw error;
  }
};




export const fetchForecastData = async (cityName) => {
  // console.log(cityName)
  if (!cityName.label) {
    return null
  }
  const { label } = cityName;
  const city = label;
  
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }
    const data = await response.data;
    return data;
  } catch (error) {
    console.log('Error fetching data:', error);
    throw error;
  };
}