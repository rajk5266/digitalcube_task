import React from 'react'

export default function WeatherCard({icon,title,description}) {
  return (
    <div className='weather-card d-flex rounded align-items-center p-2' >
        <div className="icon p-2 d-flex align-items-center justify-content-center">
            <img src={icon} alt="icon"/>
        </div>
        <div className="text ms-2">
            <p className='mb-1 fw-medium'>{title}</p>
            <p className='m-0'>{description}</p>
        </div>
    </div>
  )
}
