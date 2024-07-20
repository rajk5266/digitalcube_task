import React, { useState, useEffect, useRef, useCallback } from 'react';
import Chart from 'chart.js/auto';
import { fetchForecastData } from '../service/currentWeather';

const FivedaysForecast = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedDataType, setSelectedDataType] = useState('temperature');
  const chartRef = useRef(null);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchForecastData(city);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [city]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (weatherData) {
      const labels = weatherData.list.map(item => {
        const date = new Date(item.dt_txt);
        const dayName = date.toLocaleString('en-US', { weekday: 'short' });
        const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        return `${dayName} ${time}`;
      });

      const step = Math.ceil(labels.length / 10);
      const filteredLabels = labels.filter((label, index) => index % step === 0);

      let dataPoints = [];

      switch (selectedDataType) {
        case 'temperature':
          dataPoints = weatherData.list.map(item => item.main.temp);
          break;
        case 'wind':
          dataPoints = weatherData.list.map(item => item.wind.speed);
          break;
        case 'rain':
          dataPoints = weatherData.list.map(item => (item.rain && item.rain['3h']) ? item.rain['3h'] : 0);
          break;
        default:
          break;
      }

      if (chartRef.current) {
        chartRef.current.data.datasets[0].data = dataPoints;
        chartRef.current.data.datasets[0].label = selectedDataType.charAt(0).toUpperCase() + selectedDataType.slice(1);
        chartRef.current.data.labels = filteredLabels;
        chartRef.current.update();
      } else {
        const ctx = document.getElementById('weatherChart');
        const newChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: filteredLabels,
            datasets: [{
              label: selectedDataType.charAt(0).toUpperCase() + selectedDataType.slice(1),
              data: dataPoints,
              fill: false,
              borderColor: getChartColor(selectedDataType),
              tension: 0.4,
              borderWidth: 2,
              pointRadius: 4,
              pointBackgroundColor: '#ffffff',
              pointBorderColor: getChartColor(selectedDataType),
              pointHoverRadius: 6,
              pointHoverBackgroundColor: getChartColor(selectedDataType),
              pointHoverBorderColor: '#ffffff'
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: false,
                grid: {
                  color: '#e0e0e0'
                }
              },
              x: {
                grid: {
                  color: '#e0e0e0'
                }
              }
            },
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: '#333333',
                  boxWidth: 12,
                  boxHeight: 2,
                  padding: 10,
                  usePointStyle: true,
                }
              }
            }
          }
        });
        chartRef.current = newChart;
      }
    }
  }, [weatherData, selectedDataType]);

  const handleDataTypeChange = (event) => {
    setSelectedDataType(event.target.value);
  };

  const getChartColor = (dataType) => {
    switch (dataType) {
      case 'temperature':
        return '#f08080';
      case 'wind':
        return '#6495ed';
      case 'rain':
        return '#20b2aa';
      default:
        return '#000000';
    }
  };

  return (
    <>
      <div className="select-wrapper">
        <select className="custom-select" value={selectedDataType} onChange={handleDataTypeChange}>
          <option value="temperature">Temperature</option>
          <option value="wind">Wind Speed</option>
          <option value="rain">Rainfall (3h)</option>
        </select>
      </div>
      <div>
        <canvas id="weatherChart" ></canvas>
      </div>
    </>
  );
};

export default FivedaysForecast;