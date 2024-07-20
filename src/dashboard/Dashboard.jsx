import React, { useState } from "react";

import TopDisplay from "../components/TopDisplay";
import TabsOptions from "../components/TabsOptions";
import WeatherData from "../components/WeatherData";
import FivedaysForecast from "../components/5daysForecast";

const defaultCity = { value: "1", label: "Mumbai" };
const Dashboard = () => {
  const [city, setCity] = useState(defaultCity);
  const [VisualDataType, setVisualDataType] = useState('current');
  return (
    <div>
      <TopDisplay city={city} setCity={setCity} />
    
     
      {VisualDataType === 'current' && <WeatherData/> }
      {VisualDataType === '5_day_forecast' && <FivedaysForecast/> }
    </div>
  );
};

export default Dashboard;
