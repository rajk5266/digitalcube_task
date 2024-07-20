import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

const TabsOptions = () => {
  const [VisualDataType, setVisualDataType] = useState("current");
  const [cityName, setCityName] = useState("mumbai");

  const handleChange = (event) => {
    setVisualDataType(event.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="visual-tabs">
            <div className="input-wrapper">
              <input
                type="checkbox"
                value="current"
                checked={VisualDataType === "current"}
                onChange={handleChange}
                className="custom-checkbox"
              />
              <span>Current</span>
            </div>

            <div className="input-wrapper">
              <input
                type="checkbox"
                value="5_day_forecast"
                checked={VisualDataType === "5_day_forecast"}
                onChange={handleChange}
                className="custom-checkbox"
              />
              <span>5 Days</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TabsOptions;
