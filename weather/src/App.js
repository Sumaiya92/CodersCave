import React from 'react';
import Background from './components/Background';
import MiniCard from './components/MIniCard';
import WeatherCard from './components/WeatherCard';
import SearchAppBar from './components/SearchAppBar';
import { useStateContext } from './Context';
import './index.css';

function App() {
  const { weather, values, setCity } = useStateContext();

  const fetchWeatherData = (city) => {
    setCity(city);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-400">
      <div className="w-1/5 bg-white p-4 flex flex-col space-y-4 shadow-xl rounded-r-lg">
        <h1 className="text-2xl text-blue-500">Weather Dashboard</h1>
        <SearchAppBar onSearch={fetchWeatherData} />
        {weather ? (
          <WeatherCard
            location={weather.location}
            temp={weather.temp}
            humidity={weather.humidity}
            iconString={weather.conditions || 'Unknown'}
            windspeed={weather.wspd}
            heatIndex={weather.heatindex}


          />
        ) : (
          <p></p>
        )}
      </div>

      <div className="w-4/5 relative">
        <Background weather={weather}  />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex p-4 space-x-5">
            {values.slice(1, 6).map((curr) => (
              <div className="glassCard p-8 flex-shrink-0 h-[40vh] bg-white shadow-md rounded-lg" key={curr.datetime}>
                <MiniCard
                  time={curr.datetime}
                  temp={curr.temp || 'N/A'}
                  humidity={curr.humidity || 'N/A'}
                  iconString={curr.conditions || 'Unknown'}
                  windspeed={curr.wspd || 'N/A'}
                 

                />
              </div>
            ))}
          </div>
        </div>

        {/* 5-Day Forecast */}
        
        </div>
      </div>

  );
}

export default App;
