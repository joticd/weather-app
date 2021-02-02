
import React from 'react';
import { WeatherForcast } from '../helpers/Interfaces';

type Props = {
    weather : WeatherForcast
}

const CityWeather :React.FC<Props> = ({weather}) => {
    const {name, main, weatherData} = weather;
    console.log(name, main, weatherData)
    return (        
        <div className="col-md-3">
           {name}
        </div>
    )
}

export default CityWeather;
