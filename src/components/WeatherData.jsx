import React from 'react'
import WeatherCard from './WeatherCard';
import WindIcon from '../assets/icons/wind.png';
import HumidityIcon from '../assets/icons/humidity.png';
import PressureIcon from '../assets/icons/pressure.png';
import VisibilityIcon from '../assets/icons/visibility.png'

import highTempIcon from '../assets/icons/high_temp.png'
import LowTempIcon from '../assets/icons/low-temperature.png'
import sunriseIcon from '../assets/icons/sunrise.png'
import sunsetIcon from '../assets/icons/sunset.png'

import { Col, Container, Row } from 'react-bootstrap';
import { formatTime } from '../utils/dateUtils';

const WeatherData = ({data}) => {
  console.log(data)
 
  return (
    <>
  
     <Container>
     <Row className='row-gap-4'>
      <Col xs={12} md={6} >
        <WeatherCard icon={WindIcon} title={'Wind Speed'} description={data?.wind?.speed+' meter/sec'}/>
      </Col>
      <Col xs={12} md={6} >
        <WeatherCard icon={HumidityIcon} title={'Humidity'} description={data?.main?.humidity+' %'}/>
      </Col>
      <Col xs={12} md={6} >
        <WeatherCard icon={PressureIcon} title={'Pressure'} description={data?.main?.pressure+' hPa'}/>
      </Col>
      <Col xs={12} md={6} >
        <WeatherCard icon={VisibilityIcon} title={'Visibility'} description={data?.visibility/1000+' km'}/>
      </Col>

      <Col xs={12} md={6} >
        <WeatherCard icon={sunriseIcon} title={'Sunrise'} description={formatTime(data?.sys?.sunrise)}/>
      </Col>
      <Col xs={12} md={6} >
        <WeatherCard icon={sunsetIcon} title={'Sunset'} description={formatTime(data?.sys?.sunset)}/>
      </Col>
      <Col xs={12} md={6} >
        <WeatherCard icon={highTempIcon} title={'Max Temperature'} description={data?.main?.temp_max}/>
      </Col>
      <Col xs={12} md={6} >
        <WeatherCard icon={LowTempIcon} title={'Low Temperature'} description={data?.main?.temp_min}/>
      </Col>

     </Row>
     </Container>
    </>
  )
}

export default WeatherData