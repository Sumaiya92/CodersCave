import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("");
  const [values, setValues] = useState([]);
  const [locations, setLocations] = useState([]);
  const[windspeed,setWindspeed]=useState()
  const [humidity, setHumidity] = useState();
  const [heatIndex,setHeatIndex]=useState()


  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
    

      if (!apiKey) {
        console.error("API Key is missing");
        return;
      }
  
      const options = {
        method: "GET",
        url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
        params: {
          aggregateHours: "24",
          location: city,
          unitGroup: "metric",
          short_column_names: 0,
          contentType: "json",
        },
        headers: {
          "x-rapidapi-host": "visual-crossing-weather.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        },
      };
  
      try {
        const response = await axios.request(options);
        const thisDATA = Object.values(response.data.locations)[0];
        setLocations(thisDATA.address);
        setValues(thisDATA.values);
        setWeather(thisDATA.values[0]);
      } catch (error) {
        console.error("Error fetching weather data:", error.response || error.message);
        alert(`Error: ${error.response ? error.response.status : error.message}`);
      }
    };
  
    if (city) {
      fetchWeather(); 
    }
  }, [city]);
  
  return (
    <StateContext.Provider value={{ weather, city, setCity,values,locations, setWeather, windspeed,setWindspeed,humidity,setHumidity,heatIndex,setHeatIndex}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(StateContext);
};
