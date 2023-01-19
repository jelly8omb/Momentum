const img1 = document.getElementById('img1');
const weathertemp = document.getElementById('weathertemp');
const counTry = document.getElementById('counTry');
const API_KEY = 'c8066bf9271818b773cd0e7f9d156722';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
const getName = localStorage.getItem("userName");


const GeoOk  = async (position) => {
    const lat =position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const countryUrl = `http://api.openweathermap.org/geo/1.0/direct?q=Seoul&limit=5&appid=${API_KEY}`;
    //const cUrl = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`;
    
    // const fetchWeatherAPI =async (url) => {
    //   const Data = await(
    //         await fetch(url)
    //     ).json()
    //    return Data
    // }

    // fetchWeatherAPI(countryUrl);

    // const weatherNameData = fetchWeatherAPI(countryUrl);

    // console.log(weatherNameData)
    

    // const countryName = cData.country;
    // console.log(countryName);
    // const cityName2 = cData.name;
    // console.log(cityName2);


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
    city.innerText = `${getName}님의 현재 위치는 ${cityName}`
    
    
    
}

const GeoError = () => {
    console.log("can not access to the data ")

}


console.log(getName);
navigator.geolocation.getCurrentPosition(GeoOk,GeoError);