
interface Main {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number
}

interface Wind {
    deg: number,​​
    speed: number
}

interface Weather {
    description: string,
    icon: string,
    id: number,
    main: string
}

export interface WeatherForcast {
    name: string,
    main: Main,
    weatherData: Weather,
    wind : Wind
}

export interface NextDay{
    icon:string,
    max:number,
    min:number

}

export interface CityForecastData {
    current: WeatherForcast,
    nextDay:NextDay[]
}

export interface WeatherList {
    dt: number,
    temp:{
        day: number,
        eve: number,
        max: number,
        min: number,
        morn: number,
        night: number

    },
    weather:{
        description: string,
        icon: string,
        id: number,
        main: string

    }
}