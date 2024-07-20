import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopDisplay from "../components/TopDisplay";
import TabsOptions from "../components/TabsOptions";
import WeatherData from "../components/WeatherData";
import Weatherforecast from "../components/Weatherforecast";
import FivedaysForecast from "../components/5daysForecast";

const defaultCity = { value: "1", label: "Mumbai" };
const Dashboard = () => {
  const [city, setCity] = useState(defaultCity);
  const [visualDataType, setVisualDataType] = useState("current");
  return (
    <div>
      <Row>
        <Col xs={12} md={4}>
          <Container>
            <TopDisplay
              city={city}
              setCity={setCity}
              visualDataType={visualDataType}
              setVisualDataType={setVisualDataType}
            />
          </Container>
        </Col>
        <Col xs={12} md={8}>
          <Container>
            <Weatherforecast city={city} visualDataType={visualDataType} setVisualDataType={setVisualDataType} />
 
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
