import weather from './api';

export const getWeatherDataApi = async (name:string, isWeather=true) => {
    const partUrl = isWeather ? 'weather' : 'forecast';
    const dataW = await weather.get(`/${partUrl}`,{
        params:{
            q:name
        }
    });

    return dataW;
}