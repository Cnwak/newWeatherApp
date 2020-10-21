class UI{
  constructor(){
    this.location = document.getElementById('location')
    this.icon= document.getElementById('icon')
    this.cloud= document.getElementById('clouds')
    this.temp= document.getElementById('temp')
    this.humidity= document.getElementById('humidity')
    this.dewpoint= document.getElementById('dewpoint')
    this.windspeed= document.getElementById('windspeed')
    // this.date= document.getElementById('date')
  }
  
  paint(details){
    this.location.textContent= `${details.name},${details.sys.country}`
    this.icon.setAttribute('src',`http://openweathermap.org/img/w/${details.weather[0].icon}.png`)
    this.cloud.textContent= `${details.weather[0].description}`
    this.temp.textContent= `Temp: ${details.main.temp}°c`
    this.humidity.textContent= `Local Humidty: ${details.main.humidity}%`
    this.dewpoint.textContent= `Feels like: ${details.main.feels_like}°c ,${details.weather[0].main}`
    this.windspeed.textContent= `Windspeed: ${details.wind.speed}km/h`
    // this.date.textContent= `Data retrieved on: ${details.weatherObservation.datetime}`
  }
  }