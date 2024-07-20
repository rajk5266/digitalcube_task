import React, { useState } from 'react';

import TopDisplay from '../components/TopDisplay';
import TabsOptions from '../components/TabsOptions';
import WeatherData from '../components/WeatherData';

const Dashboard = () => {
  const [city, setCity] = useState('Mumbai');
  return (
   <div>
    <TopDisplay city={city} setCity={setCity}/>
    {/* <TabsOptions/> */}
    {/* <WeatherData/> */}
   </div>
  )
}

export default Dashboard