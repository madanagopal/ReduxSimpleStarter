const API_KEY = 'b1b15e88fa797225412429c1c50c122a1';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
    return {
        type : FETCH_WEATHER
    }
}