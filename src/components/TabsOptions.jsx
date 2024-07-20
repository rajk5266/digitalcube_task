import React, { useState } from "react";
import Row  from "react-bootstrap/Row";
import  Col from "react-bootstrap/Col";


const TabsOptions = () => {


    const [VisualDataType, setVisualDataType] = useState("current");
    const [cityName, setCityName] = useState("mumbai");
  
  
  
    const handleChange = (event) => {
      setVisualDataType(event.target.value);
    };



  return (
    <div>
      <Row>
        <Col xs={12}>
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
    </div>
  );
};

export default TabsOptions;
