import React from 'react';
import { CityForecastData } from '../helpers/Interfaces';
import NextDay from './NextDay';

type Props = {
    weatherDataSingle: CityForecastData
}

const getCityFD = (nextThreeDays:any[]) =>{
    const cityFD = nextThreeDays.map(element => {
        return <NextDay key={element.dt} max={element.max} min={element.min} icon={element.icon} dt= {element.dt}/>
    })

    return cityFD;

}

const CityForecast: React.FC<Props> = ({weatherDataSingle}) => {

    const {nextDay, current} = weatherDataSingle;
    const [, ...nextThreeDays] = nextDay;
    const today = nextDay[0];    

    const iconScr = current.weatherData.icon;
    const cityFD = getCityFD(nextThreeDays);
    return (
        <div className="row">
            <div className="col-7">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex">
                            <img className="mx-auto" alt="" src={`http://openweathermap.org/img/w/${iconScr}.png`} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>{`${current.main.temp}${'\u00b0'}C`}</h2>
                            </div>
                            <div className="col-md-6">
                                <p>max: {today.max}</p>
                                <p>min: {today.min}</p>
                            </div>
                        </div>
                        <h5>{current.weatherData.description}</h5>
                        <p>Perception: {current.main.feels_like}</p>
                        <p>Humidity: {current.main.humidity}</p>
                        <p>Wind: {current.wind.speed}</p>
                    </div>
                </div>
            </div>
            <div className="col-5">
                {cityFD}
                
            </div>
            
        </div>
    )
}

export default CityForecast;
