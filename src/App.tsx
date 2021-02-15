import React, { useEffect, useState } from 'react';
import CityForecast from './components/CityForecast';
import Header from './components/Header';
import WeatherLists from './components/WeatherLists';
import { getWeatherMultiData, getWeatherSingleData, returnPlaces } from './helpers/Functions';
import { CityForecastData, WeatherForcast } from './helpers/Interfaces';
import './style/App.scss';


const App : React.FC = () =>{

  const [resultSearch, setResultSearch] = useState<string>('');
  const [weatherDataSingle, setWeatherDataSingle] = useState<CityForecastData | null>(null);
  const [weatherDataMulti, setWeatherDataMulti] = useState<WeatherForcast[] | null>(null);

  useEffect(() => {
    if(resultSearch){
      getWeatherSingleData(resultSearch, setWeatherDataSingle);
    }else{
      const places = returnPlaces();
      getWeatherMultiData(places, setWeatherDataMulti);
    }
  }, [resultSearch]);

  return (
    <div>
      <div className="header">
        <Header setResultSearch={setResultSearch}/>
      </div>
      <div className="container">
        {weatherDataSingle? <CityForecast weatherDataSingle={weatherDataSingle} /> : <WeatherLists weatherDataMulti={weatherDataMulti} />}
        {/* <CityForecast weatherDataSingle={weatherDataSingle} />
        <WeatherLists weatherDataMulti={weatherDataMulti} /> */}
      </div>

    </div>
  )
}

export default App;