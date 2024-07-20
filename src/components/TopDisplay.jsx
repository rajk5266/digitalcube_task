import React, { useEffect, useState } from "react";
import Search from "./Search";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import TabsOptions from "./TabsOptions";
import { fetchWeatherData } from "../service/currentWeather";
import weatherIcons from "../../public/weatherIcons";
import { formatDateFromTimestamp } from "../utils/dateUtils";

const TopDisplay = ({ city, setCity, data }) => {
  const weatherMain = data?.weather?.[0]?.main;
  const weatherIconUrl =
    weatherIcons[weatherMain] || "../assets/icons/cloudy.png";

  return (
    <div className="top-display-wrapper">
      <div className="top-display">
        <div className="header">{/* <h2>Weather App</h2> */}</div>
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
              <Col xs={12}>
                <div className="description">
                  <img
                    className="img-fluid"
                    src={weatherIconUrl}
                    alt={weatherMain}
                  />

                  {/* <h2>{data?.weather?.[0]?.main}</h2> */}
                </div>
              </Col>
              <Col xs={6}>
                <div className="temp-area">
                  <div className="temp">
                    <h1>
                      {data?.main?.temp}
                      <sup> °</sup>C
                    </h1>
                  </div>
                  <div className="feels-like">
                    <p>Feels Like {data?.main?.feels_like}</p>
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <h2>{data?.weather?.[0]?.main}</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <div className="humidity">
                  <h6>Humidity - {data?.main?.humidity}</h6>
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
    </div>
  );
};

export default TopDisplay;
