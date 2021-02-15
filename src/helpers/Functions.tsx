import { getOneCallDataApi, getWeatherDataApi } from '../api/Functions';
import { CityForecastData, WeatherForcast, WeatherList } from './Interfaces';

export const places = ["Beograd", "Novi Sad", "Niš", "Kragujevac", "Priština", "Subotica", "Zrenjanin", "Pančevo", "Čačak", "Kruševac", "Kraljevo", "Novi Pazar", "Smederevo", "Leskovac", "Užice", "Vranje", "Valjevo", "Šabac", "Sombor", "Požarevac", "Pirot", "Zaječar", "Kikinda", "Sremska Mitrovica", "Jagodina", "Vršac", "Bor", "Prokuplje", "Loznica"];

export const returnPlaces = () =>{
    const showPlaces:string[] = [];
    const newPlaceArr = [...places];
    do {
        let num = Math.floor(Math.random()*newPlaceArr.length);
        let place = newPlaceArr.splice(num, 1);
        showPlaces.push(place[0]);
    } while (showPlaces.length < 4);  
    return showPlaces;
}


const getWeatherData = async (place:string) => {
    const {data} = await getWeatherDataApi(place);
    const {name, main, weather, wind, coord} = data;
    const weatherData = weather[0];
    return {name, main, weatherData, wind, coord};
    
}

const createList = (list:any[]): WeatherList[] => {
    const cloneList = [...list];
    const splicelist = cloneList.splice(0,4);
    const newList : WeatherList[] = splicelist.map(listData=>{
        return {dt:listData.dt, temp:listData.temp, weather:listData.weather[0]};
    });
    return newList;
}

export const getWeatherSingleData = async (place:string, setWeatherDataSingle: React.Dispatch<React.SetStateAction<CityForecastData | null>>) => {
    const cityForecast = {} as CityForecastData;
    const {name, main, weatherData, wind, coord} = await getWeatherData(place);
    const {data} = await getOneCallDataApi(coord.lat, coord.lon);
    const newList = createList(data.daily);
    cityForecast.current = {name, main, weatherData, wind};    
    cityForecast.nextDay = newList.map(element=>{
        return {dt: element.dt, icon:element.weather.icon, max:element.temp.max, min:element.temp.min}
    });
    setWeatherDataSingle(cityForecast);
    
}

export const getWeatherMultiData = async (places:string[], setWeatherDataMulti:React.Dispatch<React.SetStateAction<WeatherForcast[] | null>>) => {
    const currentData:WeatherForcast[] = [];
    await Promise.all(places.map(async place => {
        const {name, main, weatherData, wind} = await getWeatherData(place);
        currentData.push({name, main, weatherData, wind});
    }));
    setWeatherDataMulti(currentData);
    
}

export const getDay = (dt:number) =>{
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];    
    const dayDt = new Date(dt*1000);
    return days[dayDt.getDay()]
}