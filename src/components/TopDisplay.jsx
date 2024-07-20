import React, { useEffect, useState } from "react";
import Search from "./Search";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TabsOptions from "./TabsOptions";
import { fetchWeatherData } from "../service/currentWeather";

const TopDisplay = ({ city, setCity }) => {
  const [VisualDataType, setVisualDataType] = useState("");
//   console.log(city, "from Top display component");

useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeatherData(city);
    };

    fetchData();
  }, [city]);

  return (
    <div>
      <div className="top-display">
        <div className="header">
          <h2>Weather App</h2>
        </div>
        <Row className="top-bar">
          <Col xs={12}>
            <div className="search-area">
              <Search city={city} setCity={setCity} />
              {/* <button type="submit">Search</button> */}
            </div>
          </Col>
          <Col>
            {VisualDataType === "current" && (
              <div className="current-weather">
                {/*  weather information  */}

                {/* <CurrentWeather cityName={cityName} /> */}
              </div>
            )}

            {VisualDataType === "5_day_forecast" && (
              <div className="five-day-forecast">
                {/*  5-day forecast   */}
                <h2>5 Day Forecast</h2>
              </div>
            )}
          </Col>
        </Row>
      </div>
      <div>
        <TabsOptions />
      </div>
    </div>
  );
};

export default TopDisplay;
