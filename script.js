const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '20554c5f15mshc722afa55d2fb90p1c45ecjsn3d69688caabf',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getweather = (city) => {	
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {


		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		// wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

}
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getweather(city.value)
})

getweather("Delhi")

const cities = [
    { name: "Mumbai", idPrefix: "Mumbai" },
    { name: "Shanghai", idPrefix: "Shanghai" },
    { name: "Punjab", idPrefix: "Punjab" },
    { name: "Gujrat", idPrefix: "Gujrat" },
    { name: "Haryana", idPrefix: "Haryana" }
];

const getWeather = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            const prefix = cities.find(item => item.name === city).idPrefix;
            document.getElementById(`${prefix}CloudPct`).textContent = response.cloud_pct;
            document.getElementById(`${prefix}FeelsLike`).textContent = response.feels_like;
            document.getElementById(`${prefix}Humidity`).textContent = response.humidity;
            document.getElementById(`${prefix}MaxTemp`).textContent = response.max_temp;
            document.getElementById(`${prefix}MinTemp`).textContent = response.min_temp;
            document.getElementById(`${prefix}Sunrise`).textContent = response.sunrise;
            document.getElementById(`${prefix}Sunset`).textContent = response.sunset;
            document.getElementById(`${prefix}Temp`).textContent = response.temp;
            document.getElementById(`${prefix}WindDegrees`).textContent = response.wind_degrees;
            document.getElementById(`${prefix}WindSpeed`).textContent = response.wind_speed;
        })
        .catch(err => console.error(err));
};

cities.forEach(city => {
    getWeather(city.name);
});
