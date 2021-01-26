import weather from './api';

export const getWeatherData = async (lat:number, long: number) => {
    const dataW = await weather.get('/forecast', {
        params:{
            lat,
            long
        }
    });
}