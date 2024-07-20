import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

const TabsOptions = ({ visualDataType, setVisualDataType }) => {
  const handleChange = (value) => {
    setVisualDataType(value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="visual-tabs">
            <div className="button-wrapper">
              <button
              className={visualDataType === "current" ? "active" : ""}
                value="current"
                onClick={(e) => handleChange(e.target.value)}
              >
                Current
              </button>
            </div>

            <div className="button-wrapper">
              <button
              className={visualDataType === "5_day_forecast" ? "active" : ""}
                value="5_day_forecast"
                onClick={(e) => handleChange(e.target.value)}
              >
                5 days Forecast
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TabsOptions;
