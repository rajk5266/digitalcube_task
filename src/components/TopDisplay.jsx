import React, { useEffect, useState } from "react";
import Search from "./Search";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import TabsOptions from "./TabsOptions";
import { fetchWeatherData } from "../service/currentWeather";
import { formatDateFromTimestamp } from "../utils/dateUtils";

const TopDisplay = ({ city, setCity }) => {
 
  const [data, setData] = useState([]);
  //   console.log(city, "from Top display component");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeatherData(city);
      setData(data);
    };

    fetchData();
  }, [city]);

  console.log(data);

  return (
    <>
      <div className="top-display">
        <div className="header">
          <h2>Weather App</h2>
        </div>
        <Container>
          <Row className="top-bar">
            <Col xs={12}>
              <div className="search-area">
                <Search city={city} setCity={setCity} />
                {/* <button type="submit">Search</button> */}
              </div>
            </Col>
          </Row>
        </Container>
        <div className="top-display-content">
          <Container>
            <Row>
              <Col xs={6}>
                <div className="temp-area">
                  <div className="temp">
                    <h1>
                      {data?.main?.temp
                        ? (data.main.temp - 273.15).toFixed(2)
                        : ""}
                    </h1>
                  </div>
                  <div className="feels-like">
                    <p>
                      Feels Like{" "}
                      {data?.main?.feels_like
                        ? (data.main.feels_like - 273.15).toFixed(2)
                        : ""}
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div className="description">
                  <div>
                    <img src="" />
                  </div>
                  <h2>{data?.weather?.[0]?.main}</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <div className="humidity">
                  <h3>Humidity - {data?.main?.humidity}</h3>
                </div>
              </Col>
              <Col xs={6}>
                <div className="date">
                  <p>{formatDateFromTimestamp(data?.dt)}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

     
    </>
  );
};

export default TopDisplay;
