import {getWeatherDataApi} from '../api/Functions';

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


export const getWeatherData = async (name:string, setWeatherData:any) => {
    let isWeather = name.length>0 ? true : false;
    let nameArg = name.length>0 ? name : "Lazarevac";
    let data = await getWeatherDataApi(nameArg, isWeather);

    console.log(data)
    return data;
    
}