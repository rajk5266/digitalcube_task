import React, { useState } from "react";

import TopDisplay from "../components/TopDisplay";
import TabsOptions from "../components/TabsOptions";
import WeatherData from "../components/WeatherData";
import FivedaysForecast from "../components/5daysForecast";

const defaultCity = { value: "1", label: "Mumbai" };
const Dashboard = () => {
  const [city, setCity] = useState(defaultCity);
  const [visualDataType, setVisualDataType] = useState('current');
  return (
    <div>
      <TopDisplay city={city} setCity={setCity}  visualDataType={visualDataType} setVisualDataType={setVisualDataType} />
    
     
      {visualDataType === 'current' && <WeatherData/> }
      {visualDataType === '5_day_forecast' && <FivedaysForecast/> }
    </div>
  );
};

export default Dashboard;
