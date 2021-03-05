import React from 'react';
import { getDay } from '../helpers/Functions';
import '../style/NextDay.scss';

type Props = {
    max:number,
    min:number,
    dt:number,
    icon:string

}

const NextDay:React.FC<Props> = ({max, min, dt, icon}) => {
    const day = getDay(dt);
    return (
        
        <div className="d-flex nextDay">
            <div className="nextDay_img">
                <img alt="" src={`http://openweathermap.org/img/w/${icon}.png`} />

            </div>
            <div className="nextDay_data">
                {day}
                <div className="d-flex">
                    <div className="nextDay_max">{`${Math.round(max)}${'\u00b0'}C`}</div>
                    <div className="nextDay_min">{`${Math.round(min)}${'\u00b0'}C`}</div>
                </div>
            </div>
        </div>
        

    )
}

export default NextDay
