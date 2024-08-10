import React, { useState, useEffect } from 'react';
import sun from '../assets/icons/sun.png';
import cloud from '../assets/icons/cloud.png';
import fog from '../assets/icons/fog.png';
import rain from '../assets/icons/rain.png';
import snow from '../assets/icons/snow.png';
import storm from '../assets/icons/storm.png';
import windy from '../assets/icons/windy.png'



const MiniCard = ({ temp,weather,iconString,time,conditions,humidity,windspeed}) => {
  const [icon, setIcon] = useState(sun);


  useEffect(() => {
    if (iconString) {
      const lowerCaseIconString = iconString.toLowerCase();
      if (lowerCaseIconString.includes('sun')) {
        setIcon(sun);
      } else if (lowerCaseIconString.includes('rain')) {
        setIcon(rain);
      } else if (lowerCaseIconString.includes('cloudy')|| lowerCaseIconString.includes('overcast')) {
        setIcon(cloud);
      } else if (lowerCaseIconString.includes('snow')) {
        setIcon(snow);
      } else if (lowerCaseIconString.includes('windy')) {
        setIcon(windy);
      } else if (lowerCaseIconString.includes('storm')) {
        setIcon(storm);
      } else if (lowerCaseIconString.includes('fog')) {
        setIcon(fog);
      }
    }
  }, [iconString]);


  return (
    <div className='w-[10rem] h-[20rem] p-4 flex space-y-2  flex-col '>
      <div>
      <p className='text-center text-white'>
      {time ? new Date(time).toLocaleDateString('en', { weekday: 'long' }) : 'N/A'}
      </p>
      <hr />
      <div className='w-full flex justify-center  items-center flex-1'>
        <img src={icon} alt="forecast not available" className='w-[4rem] h-[4rem]' />
      </div>
      <div className='flex justify-center text-center text-white flex-col'>
        <p className="text-2xl font-semibold  ">{temp}°C</p>
        <p className="text-lg ">{weather}</p>
        <p className="text-lg ">{conditions}</p>
        <p className="text-lg ">{iconString}</p>
        <p className="text-lg ">Humidity:{humidity}</p>
        <p className="text-lg ">WindSpeed:{windspeed}</p>



     

      
      </div>

      </div>
     
    </div>
  )
}


export default MiniCard;
