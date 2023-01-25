import { API_KEY } from './apikey.js';



const img1 = document.getElementById('img1');
const weathertemp = document.getElementById('weathertemp');
const counTry = document.getElementById('counTry');
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
const getName = localStorage.getItem("userName");


const GeoOk  = async (position) => {
    const lat =position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const countryUrl = `http://api.openweathermap.org/geo/1.0/direct?q=Seoul&limit=5&appid=${API_KEY}`;
   

    const fetchApi = async (url) => {
        const Data = await(
            await fetch(url)
        ).json()
        counTry.innerText = `${Data[0].country}, ${Data[0].name}`;
    }
    fetchApi(countryUrl);
    const data = await (
        await fetch(url)).json();
        console.log(data);
        

    const cityName = data.name;
    const weatherIcon = data.weather[0].icon;
    const getweatherIcon = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    img1.src = getweatherIcon;

    const getweatherTemp = data.main.temp;
    weathertemp.innerText = `${getweatherTemp}`;


    const city = document.getElementById('city');
    
    
    
}

const GeoError = () => {
    console.log("can not access to the data ")

}


console.log(getName);
navigator.geolocation.getCurrentPosition(GeoOk,GeoError);