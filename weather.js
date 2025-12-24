import { response } from 'express';
import readline from 'readline/promises';
const API_KEY = '33f8db3cb2d0e70fff54a1e33b4a79a6';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getWeather = async(city) =>{
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('city not found. Please check the city name.');
        }
        const weatherData = await response.json();
        console.log(weatherData);
        console.log(`\n Weather Information:`);
        console.log(`City: ${weatherData.name}`);
        console.log(`Temperature: ${weatherData.main.temp}`);
        console.log(`Dsecription: ${weatherData.weather[0].description}`); 
        console.log(`humidity: ${weatherData.main.humidity}`);
        console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);

    } catch (error) {
        console.log(error);
    }

}

const city =  await rl.question('Enter a city name to get its weather:');
await getWeather(city);
rl.close();