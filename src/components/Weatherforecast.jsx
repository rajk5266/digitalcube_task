import React from "react";
import TabsOptions from "./TabsOptions";
import WeatherData from "./WeatherData";
import FivedaysForecast from "./5daysForecast";

const Weatherforecast = ({ city, visualDataType, setVisualDataType }) => {
  return (
    <>
      <TabsOptions visualDataType={visualDataType}  setVisualDataType={setVisualDataType} />

      {visualDataType === "current" && <WeatherData />}
      {visualDataType === "5_day_forecast" && <FivedaysForecast />}
    </>
  );
};

export default Weatherforecast;
