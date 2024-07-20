import React from 'react'

export default function WeatherCard({icon,title,description}) {
  return (
    <div className='weather-card ' >
        <div className="icon ">
            <img src={icon} alt="icon"/>
        </div>
        <div className="text ">
            <p className='fs-4 fw-medium'>{title}</p>
            <p className='fs-5'>{description}</p>
        </div>
    </div>
  )
}
