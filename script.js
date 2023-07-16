let input = document.getElementById('input');

let search = document.getElementById('search-png');

let humidity = document.getElementById('humidity');

let temp = document.getElementById('temp');

let cityName = document.getElementById('cityName');

let speed = document.getElementById('speed');

let weather = document.getElementById('weather');

search.addEventListener('click', async() => {
    
        let city = input.value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d05bed5134a316c5baff45f8bf7029b&units=metric`;
        
        let response = await fetch(url)
        let data = await response.json();
        humidity.innerText = data.main.humidity
        temp.innerText = data.main.temp;
        cityName.innerText = data.name
        speed.innerText = data.wind.speed
        if(data.weather[0].main === 'Rain'){
            weather.innerHTML = '<img id="weather" src="Images/rain.png" alt="Weather-img" width="200">'
        }
        else if(data.weather[0].main === 'Clouds'){
            weather.innerHTML = '<img id="weather" src="Images/clouds.png" alt="Weather-img" width="200">'
        }
        else if(data.weather[0].main === 'Drizzle'){
            weather.innerHTML = '<img id="weather" src="Images/drizzle.png" alt="Weather-img" width="200">'
        }
        else if(data.weather[0].main === 'Mist'){
            weather.innerHTML = '<img id="weather" src="Images/mist.png" alt="Weather-img" width="200">'
        }
        else if(data.weather[0].main === 'Snow'){
            weather.innerHTML = '<img id="weather" src="Images/snow.png" alt="Weather-img" width="200">'
        }
        else if(data.weather[0].main === 'Clear'){
            weather.innerHTML = '<img id="weather" src="Images/clear.png" alt="Weather-img" width="200">'
        }
        else if(data.weather[0].main === 'Thunderstorm'){
            weather.innerHTML = '<img id="weather" src="Images/rain.png" alt="Weather-img" width="200">'
        }
        else {
            alert('Please check the spelling again :)')
        }
})

