import React from 'react';
import { WeatherForcast } from '../helpers/Interfaces';
import CityWeather from './CityWeather';

type Props = {
    weatherDataMulti : WeatherForcast[] | null
}

const getWeather = (weatherDataMulti : WeatherForcast[]): JSX.Element[]=> {
    
    const weather = weatherDataMulti.map((element, index) => {      
      return <CityWeather key={index} weather ={element} />
    });
    
    return weather;
  }

const WeatherLists:React.FC<Props> = ({weatherDataMulti}) => {
    console.log(weatherDataMulti)
    let cityWth: JSX.Element[] | null  = null;
    if(weatherDataMulti){
        cityWth = getWeather(weatherDataMulti);
    }
    return (
        <div className="container">
            <div className="row text-center">
                {cityWth}
            </div>
        
        </div>
    )
}

export default WeatherLists;
