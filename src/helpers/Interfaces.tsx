
interface Main {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number
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
    weatherData: Weather
}