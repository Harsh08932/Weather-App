const apiKey ="dc2f773febf84db918d3e9785c3eb25c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");


async function checkWeather(city){
    try{
        const response =await fetch(apiUrl+city+`&appid=${apiKey}`);
        var data = await response.json();
        console.log(data)
        let temp = parseInt(data.main.temp);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = temp+"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";     
        weatherIcon.src = `images/${data.weather[0].main}.png`

        document.querySelector('.weather').style.display ='block';
        document.querySelector(".error").style.display="none";
    }
    catch{
        document.querySelector(".error").style.display="block";
    }
        
}


searchBtn.addEventListener('click',()=>{

    checkWeather(searchBox.value);
});
