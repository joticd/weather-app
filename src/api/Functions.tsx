import weather from './api';

export const getWeatherDataApi = async (name:string, isWeather=true) => {
    const partUrl = isWeather ? 'weather' : 'forecast';
    const dataW = await weather.get(`/${partUrl}`,{
        params:{
            q:name,
            units:"metric"
        }
    });

    return dataW;
}

export const getOneCallDataApi = async (lat:number, lon:number) => {
  
    const dataW = await weather.get(`/onecall`,{
        params:{
            lat,
            lon,
            units:"metric"
        }
    });

    return dataW;
}
