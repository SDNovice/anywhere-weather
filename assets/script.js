
function getCity(){
    var city = document.getElementById("search").value
    localStorage.setItem("city", city);

    var history = document.getElementById('previousResults');

    var hisBtn = document.createElement('button');
    var prev = localStorage.getItem("city");
    
    hisBtn.textContent = prev;
    history.appendChild(hisBtn);

    hisBtn.addEventListener('click', getWeather)
   
    var forecastApi  = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=40&units=imperial&appid=97926353c846d89593c3008061a8174d`;
    var currentApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=97926353c846d89593c3008061a8174d`;
    fetch (forecastApi)
      .then(function (response){
      return response.json();
      })
        .then(function (data) {
          console.log(data);
          var forecast = document.getElementById('futureWeather');
          while (forecast.firstChild) {
            forecast.removeChild(forecast.firstChild);
          }
          for (i = 0; i < 40; i++){
            if (i % 8 === 0){
            let city = document.createElement('h1');
            let location = data.city.name;
            city.textContent = location;
            forecast.appendChild(city);

            let date = document.createElement('span');
            let day = data.list[i].dt_txt;
            date.textContent = day.trim();
            forecast.appendChild(date);

            let img = document.createElement('img');
            let icon = data.list[i].weather[0].icon;
            img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            forecast.appendChild(img);

            let conditons = document.createElement('ul');

            let fTemp = document.createElement("li");
            let fWind = document.createElement("li");
            let fHum = document.createElement("li");

            var temp = data.list[i].main.temp;
            var wind = data.list[i].wind.speed;
            var hum = data.list[i].main.humidity;

            fTemp.textContent = "Temp: " + temp + " °F";
            fWind.textContent = "Wind: " + wind + " MPH";
            fHum.textContent = "Humidity: " + hum + " %";

            conditons.appendChild(fTemp);
            conditons.appendChild(fWind);
            conditons.appendChild(fHum);

            forecast.appendChild(conditons);
          }
        }
        });
    fetch (currentApi)
      .then(function (response){
      return response.json();
      })
        .then(function (data) {
          var city = document.getElementById("cCity"); 
          var location = data.name;
          city.textContent = location;
          
          var img = document.getElementById('cIcon')
          var icon = data.weather[0].icon;
          img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        

          var temp = data.main.temp;
          var wind = data.wind.speed;
          var hum = data.main.humidity;

          var cTemp = document.getElementById("cTemp");
          var cWind = document.getElementById("cWind");
          var cHum = document.getElementById("cHumidity");

          cTemp.textContent = "Temp: " + temp + " °F";
          cWind.textContent = "Wind: " + wind + " MPH";
          cHum.textContent = "Humidity: " + hum + " %";
          
        });
    function getWeather(){
      var forecastApi  = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=40&units=imperial&appid=97926353c846d89593c3008061a8174d`;
      var currentApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=97926353c846d89593c3008061a8174d`;
      fetch (forecastApi)
        .then(function (response){
        return response.json();
        })
          .then(function (data) {
            var forecast = document.getElementById('futureWeather');
            while (forecast.firstChild) {
              forecast.removeChild(forecast.firstChild);
            }
            for (i = 0; i < 40; i++){
              if (i % 8 === 0){
              let city = document.createElement('h1');
              let location = data.city.name;
              city.textContent = location;
              forecast.appendChild(city);

              let date = document.createElement('span');
              let day = data.list[i].dt_txt;
              date.textContent = day.trim();
              forecast.appendChild(date);

              let img = document.createElement('img');
              let icon = data.list[i].weather[0].icon;
              img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
              forecast.appendChild(img);

              let conditons = document.createElement('ul');

              let fTemp = document.createElement("li");
              let fWind = document.createElement("li");
              let fHum = document.createElement("li");

              var temp = data.list[i].main.temp;
              var wind = data.list[i].wind.speed;
              var hum = data.list[i].main.humidity;

              fTemp.textContent = "Temp: " + temp + " °F";
              fWind.textContent = "Wind: " + wind + " MPH";
              fHum.textContent = "Humidity: " + hum + " %";

              conditons.appendChild(fTemp);
              conditons.appendChild(fWind);
              conditons.appendChild(fHum);

              forecast.appendChild(conditons);
            }
          }
          });
      fetch (currentApi)
        .then(function (response){
        return response.json();
        })
          .then(function (data) {
            var city = document.getElementById("cCity"); 
            var location = data.name;
            city.textContent = location;
            
            var img = document.getElementById('cIcon')
            var icon = data.weather[0].icon;
            img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

          

            var temp = data.main.temp;
            var wind = data.wind.speed;
            var hum = data.main.humidity;

            var cTemp = document.getElementById("cTemp");
            var cWind = document.getElementById("cWind");
            var cHum = document.getElementById("cHumidity");

            cTemp.textContent = "Temp: " + temp + " °F";
            cWind.textContent = "Wind: " + wind + " MPH";
            cHum.textContent = "Humidity: " + hum + " %";
            
          });
    }
}

// function saveCities(){
//   var city = document.getElementById("search").value;
//   localStorage.setItem("city", city);

//   var history = document.getElementById('previousResults');

//   var hisBtn = document.createElement('button');
//   var prev = localStorage.getItem("city");
//   hisBtn.textContent = prev;
//   history.appendChild(hisBtn);
// }

var btn = document.getElementById('btn');
btn.addEventListener('click', getCity);

// btn.addEventListener('click', saveCities);
// hisbtn.addEventListener('click', getCity);