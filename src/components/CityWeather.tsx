
import React from 'react';
import { WeatherForcast } from '../helpers/Interfaces';

type Props = {
    weather : WeatherForcast
}

const CityWeather :React.FC<Props> = ({weather}) => {
    const {name, main, weatherData, wind} = weather;
    return (        
        <div className="col-lg-3">
            <div className="mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="d-flex">
                    <img className="mx-auto" alt="" src={`http://openweathermap.org/img/w/${weatherData.icon}.png`} />
                </div>
                <h4>{weatherData.main}</h4>
                <p className="lead mb-0">Perception: {`${main.feels_like}`}</p>
                <p className="lead mb-0">Humidity: {`${main.humidity}`}</p>
                <p className="lead mb-0">Wind: {`${wind.speed}`}</p>
                <h2>{`${main.temp}${'\u00b0'}C`}</h2>
                <h3>{`${name}`}</h3>
            </div>
        </div>
    )
}

export default CityWeather;
