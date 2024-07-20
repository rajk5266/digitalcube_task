import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopDisplay from "../components/TopDisplay";
import Weatherforecast from "../components/Weatherforecast";
import FivedaysForecast from "../components/5daysForecast";
import { fetchWeatherData } from "../service/currentWeather";

const defaultCity = { value: "1", label: "Mumbai" };
const Dashboard = () => {
  const [city, setCity] = useState(defaultCity);
  const [visualDataType, setVisualDataType] = useState("current");
  const [data, setData] = useState([]);
  //   console.log(city, "from Top display component");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeatherData(city);
      setData(data);
    };

    fetchData();
  }, [city]);

  // console.log(data);
  return (
    <>
      {/* <Container>
        <h2 className="text-center p-2 d-none d-sm-block">Weather Forecast</h2>
      </Container> */}
      <div className="container-fluid">
        <Row>
          <Col xs={12} md={4} lg={3} className="sidebar">
            <Container>
              <TopDisplay
                city={city}
                setCity={setCity}
                visualDataType={visualDataType}
                setVisualDataType={setVisualDataType}
                data={data}
              />
            </Container>
          </Col>
          <Col xs={12} md={8} col={9} className="main-content">
            {/* <Container> */}
            <Weatherforecast
              city={city}
              visualDataType={visualDataType}
              setVisualDataType={setVisualDataType}
              data={data}
            />
            {/* </Container> */}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
