import React from 'react'
import WeatherCard from './WeatherCard';
import Icon from '../assets/icons/cloudy.png';
import WindIcon from '../assets/icons/wind.png';
import HumidityIcon from '../assets/icons/humidity.png';
import PressureIcon from '../assets/icons/pressure.png';
import VisibilityIcon from '../assets/icons/visibility.png'
import { Col, Container, Row } from 'react-bootstrap';

const WeatherData = ({data}) => {
  console.log(data)
  return (
    <>
     {/* <TabsOptions visualDataType={visualDataType} setVisualDataType={setVisualDataType} /> */}
     <Container>
     <Row className='row-gap-4'>
      <Col xs={12} md={6} xl={3}>
        <WeatherCard icon={WindIcon} title={'Wind Speed'} description={data?.wind?.speed+' meter/sec'}/>
      </Col>
      <Col xs={12} md={6} xl={3}>
        <WeatherCard icon={HumidityIcon} title={'Humidity'} description={data?.main?.humidity+' %'}/>
      </Col>
      <Col xs={12} md={6} xl={3}>
        <WeatherCard icon={PressureIcon} title={'Pressure'} description={data?.main?.pressure+' hPa'}/>
      </Col>
      <Col xs={12} md={6} xl={3}>
        <WeatherCard icon={VisibilityIcon} title={'Visibility'} description={data?.visibility/1000+' km'}/>
      </Col>
     </Row>
     </Container>
    </>
  )
}

export default WeatherData