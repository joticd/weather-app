import { getOneCallDataApi, getWeatherDataApi } from '../api/Functions';
import { WeatherForcast } from './Interfaces';

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

const createList = (list:any[]) => {
    const newList = list.map((element, index) =>{
        if(index>0 && index<4)
            return {dt:element.dt, temp:element.temp, weather:element.weather[0]};
    });
    return newList.filter(listData=>listData);
}

export const getWeatherSingleData = async (place:string/*, setWeatherData:any*/) => {
    const {name, main, weatherData, wind, coord} = await getWeatherData(place);
    const {data} = await getOneCallDataApi(coord.lat, coord.lon);
    const newList = createList(data.daily);
    console.log(newList);
    
}

export const getWeatherMultiData = async (places:string[], setWeatherDataMulti:React.Dispatch<React.SetStateAction<WeatherForcast[] | null>>) => {
    const currentData:WeatherForcast[] = [];
    await Promise.all(places.map(async place => {
        const {name, main, weatherData, wind} = await getWeatherData(place);
        currentData.push({name, main, weatherData, wind});
    }));
    setWeatherDataMulti(currentData);
    
}