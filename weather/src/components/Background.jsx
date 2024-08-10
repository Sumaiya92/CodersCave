import React, { useState, useEffect } from "react";
import { useStateContext } from "../Context";
import Clear from "../assets/images/Clear-1.webp";
import Sunny from "../assets/images/Sunny.webp";
import Cloudy from "../assets/images/Cloudy-1.webp";
import Rainy from "../assets/images/Rainy-1.webp";
import Snowy from "../assets/images/snow.webp";
import ThunderStorm from "../assets/images/Stormy.jpg";
import Fog from "../assets/images/fog-1.webp";
function Background() {
  const { weather } = useStateContext('');
  const [image, setImage] = useState(Clear);
  useEffect(() => {
    if (weather&&weather.conditions[0]) {
      console.log(weather)

      let strImage = weather.conditions.toLowerCase();

      if (strImage.includes("clear")) {
        setImage(Clear);
      } else if (strImage.includes("sunny")) {
        setImage(Sunny);
      } else if (strImage.includes("cloudy") || strImage.includes("overcast")) {
        setImage(Cloudy);
      } else if (strImage.includes("snow")) {
        setImage(Snowy);
      } else if (strImage.includes("rain")||strImage.includes("partial cloudy")) {
        setImage(Rainy);
      } else if (strImage.includes("thunderstorm")) {
        setImage(ThunderStorm);
      } else if (strImage.includes("fog") || strImage.includes("mist")) {
        setImage(Fog);
      }
    } else {
      setImage(Clear); 
      // Default image

    }
  }, [weather]);
  
  return (
    <img src={image} alt="weather_image" className='left-0 top-0 z-[5] opacity-80' />
  )
}
export default Background;
