import { getWeatherDataApi } from '../api/Functions';
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


export const getWeatherData = async (name:string/*, setWeatherData:any*/) => {
    console.log(name)
    
}

export const getWeatherMultiData = async (places:string[], setWeatherDataMulti:React.Dispatch<React.SetStateAction<WeatherForcast[] | null>>) => {
    const currentData:WeatherForcast[] = [];
    await Promise.all(places.map(async place => {
        const {data} = await getWeatherDataApi(place);
        console.log(data)
        const {name, main, weather, wind} = data;
        const weatherData = weather[0];
        currentData.push({name, main, weatherData, wind});
    }));
    setWeatherDataMulti(currentData);
    
}