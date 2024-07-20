import React from 'react'

export default function WeatherCard({icon,title,description}) {
  return (
    <div className='weather-card ' >
        <div className="icon ">
            <img src={icon} alt="icon"/>
        </div>
        <div className="text ">
            <p className=''>{title}</p>
            <p className=''>{description}</p>
        </div>
    </div>
  )
}
