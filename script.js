
let weather = {
    "apiKey":"1b91b7413a65d995ac72091707dfc33b",
    fetchWeather: function(city){
        fetch(
           "https://api.openweathermap.org/data/2.5/weather?q="+ city +
           "&appid="
           + this.apiKey   
                 ).then((Response) => Response.json())
                 .then((data) => this.displayWeather(data));
                 
    },
displayWeather: function(data){
    const{ name }= data;
    const{ icon, description } = data.weather[0];
    const{ temp, humidity} = data.main;
    const{ speed } = data.wind;
    
    document.querySelector(".city").innerText = "Weather in " + name; 
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = Math.trunc(temp - 273.15) + "°C";
 document.querySelector(".humidity").innerText = "humidity:" + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed:" + speed + "Km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?"  +name+"' )"

},
search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
  
  weather.fetchWeather("bokaro");
