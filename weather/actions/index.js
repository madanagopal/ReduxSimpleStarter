import axios from 'axios';

const API_KEY = 'fe8429a66b7a77451aa0c4ca2b0c32e9';

const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    
    const url = `${ROOT_URL}?q=${city},us&appid=${API_KEY}`;
    const request = axios.get(url);
    
    console.log('Request:', request);
    
    return {
        type : FETCH_WEATHER,
        payload : request
    }
}