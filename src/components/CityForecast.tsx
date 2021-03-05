import React from 'react';
import { CityForecastData } from '../helpers/Interfaces';
import '../style/CityForecast.scss';
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
        <div className="row cityfcast">
            <div className="col-md-7">
                <div className="row">
                    <div className="col-md-5">
                        <div className="d-flex cityfcast_img">
                            <img className="mx-auto" alt="" src={`http://openweathermap.org/img/w/${iconScr}.png`} />
                        </div>
                    </div>
                    <div className="col-md-7 cityfcast-data">
                        <div className="cityfcast-data__container">
                            <div className="d-flex cityfcast-data__teperature">
                                <div className="temperature-current">
                                    <h2>{`${Math.round(current.main.temp) }${'\u00b0'}C`}</h2>
                                </div>
                                <div className="temperature-maxmin">
                                    <p>max: {`${Math.round(today.max)}${'\u00b0'}C`}</p>
                                    <p>min: {`${Math.round(today.min)}${'\u00b0'}C`}</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column cityfcast-data__prop">
                                <h5>{current.weatherData.description.toUpperCase()}</h5>
                                <p>Perception: {current.main.feels_like}</p>
                                <p>Humidity: {current.main.humidity}</p>
                                <p>Wind: {current.wind.speed}</p>                        
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
            <div className="col-md-5">
                <div className="cityfcast_next">
                    {cityFD}
                </div>
                
            </div>
            
        </div>
    )
}

export default CityForecast;
