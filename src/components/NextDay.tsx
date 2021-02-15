import React from 'react';
import { getDay } from '../helpers/Functions';

type Props = {
    max:number,
    min:number,
    dt:number,
    icon:string

}

const NextDay:React.FC<Props> = ({max, min, dt, icon}) => {
    const day = getDay(dt);
    return (
        <div className="row">
            <div className="col-md-3">
                <div className="d-flex">
                    <img className="mx-auto" alt="" src={`http://openweathermap.org/img/w/${icon}.png`} />
                </div>
            </div>
            <div className="col-md-9">
                {day}
                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="p-2 bd-highlight">{max}</div>
                    <div className="p-2 bd-highlight">{min}</div>
                </div>
            </div>
        </div>
    )
}

export default NextDay
