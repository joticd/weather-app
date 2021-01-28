import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import WeatherLists from './components/WeatherLists';
import { getWeatherData, places, returnPlaces } from './helpers/Functions';
import './style/App.scss';

const App : React.FC = () =>{

  const [resultSearch, setResultSearch] = useState<string>('');
  const [weatherDataSingle, setWeatherDataSingle] = useState<any>(null);
  const [weatherDataMulti, setWeatherDataMulti] = useState<any>(null);

  useEffect(() => {
    if(resultSearch){
    }else{
      returnPlaces();
    }
    
    // getWeatherData(resultSearch, setWeatherData);
  }, [resultSearch]);

  return (
    <div>
      <div className="header">
        <Header setResultSearch={setResultSearch}/>
      </div>
      <section>
        <WeatherLists />
      </section>

    </div>
  )
}

export default App;