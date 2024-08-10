// import React, { useState, useEffect } from 'react';
// import sun from '../assets/icons/sun.png';
// import cloud from '../assets/icons/cloud.png';
// import fog from '../assets/icons/fog.png';
// import rain from '../assets/icons/cloud-rain-.png';
// import snow from '../assets/icons/snow.png';
// import storm from '../assets/icons/storm.png';
// import windy from '../assets/icons/windy.png';
// import useDate from '../Hooks/useDate';

// const WeatherCard = ({ temp, humidity, iconString }) => {
//   const [icon, setIcon] = useState("sun");
//   const { time } = useDate();

//   useEffect(() => {
//     if (iconString) {
//       const lowerCaseIconString = iconString.toLowerCase();
//       if (lowerCaseIconString.includes('sun')) {
//         setIcon(sun);
//       } else if (lowerCaseIconString.includes('rain')) {
//         setIcon(rain);
//       } else if (lowerCaseIconString.includes('cloudy')) {
//         setIcon(cloud);
//       } else if (lowerCaseIconString.includes('snow')) {
//         setIcon(snow);
//       } else if (lowerCaseIconString.includes('windy')) {
//         setIcon(windy);
//       } else if (lowerCaseIconString.includes('storm')) {
//         setIcon(storm);
//       } else if (lowerCaseIconString.includes('fog')) {
//         setIcon(fog);
//       }
//     }
//   }, [iconString]);

//   return (
//     <div className=" p-4 rounded-lg ">
//       <div className="flex items-center justify-center mb-2">
//         <img src={icon} className='w-full h-full' alt="weather icon" />
//       </div>
//       <div className='text-center'>
//         <p className="text-3xl font-bold">{temp}°C</p>
//         <p className="text-lg">Humidity: {humidity}%</p>
//         <p className="text-lg">Time: {time}</p>
//       </div>
//     </div>
//   );
// };

// export default WeatherCard;
import React, { useEffect, useState } from 'react'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'
import '../index.css'

const WeatherCard = ({
  temp,
  windspeed,
  humidity,
  iconString,
  heatIndex,


 
}) => {

  const [icon, setIcon] = useState(sun)

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud)
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain)
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm)
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog)
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow)
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind)
      }
    }
  }, [iconString])

  return (
        <div className=" p-4 rounded-lg ">
          <div className="flex items-center justify-center mb-2">
            <img src={icon} className='w-full h-full' alt="weather icon" />
          </div>
          <div className='text-center'>
            <p className="text-3xl font-bold">{temp}°C</p>
            <p className="text-lg">Humidity: {humidity}%</p>
            <p className="text-lg">Wind Speed: {windspeed} km/h</p>
            <p className="text-lg">Heat Index: {heatIndex}°C</p>
          </div>
        </div>
      );
}

export default WeatherCard