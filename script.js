import Weather from "./weatherClass.js";
import APIkey from "./apikey.js";

let city = 'Belgrade'
const button = document.querySelector('.finder .circle')

getWeather();

button.addEventListener('click',()=>{
    const inputText = document.querySelector('.finder input').value

    city = inputText;

    getWeather()
    
})

async function getWeather() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
      );
  
      const json = await response.json();
      
      console.log(json)

      const currentWeather = new Weather(
        json.name,
        json.main.temp,
        json.main.humidity,
        json.wind.speed,
        json.weather[0].main
        );
        
        changeInfos(currentWeather);

    } catch (err) {
        console.log('Prvo slovo veliko');
    }
}

function changeInfos(currentWeather) {
    const temperatureText = document.querySelector('.temperatur')
    const cityText = document.querySelector('.location')
    const huminityText = document.querySelector('.humidity .prosent')
    const windText = document.querySelector('.speed .number')
    const picture = document.querySelector('.img img')

    temperatureText.innerHTML = currentWeather.temp+'°C'
    cityText.innerHTML = currentWeather.city
    huminityText.innerHTML = currentWeather.humidity + '%'
    windText.innerHTML = currentWeather.windSpeed + 'km/h'

    switch(currentWeather.pic){
        case 'Clear':
        {
            picture.setAttribute("src", "./icons/sun.svg")
            break
        }
        case 'Rain':
        {
            picture.setAttribute("src", "./icons/rain.svg")
            break
        }
        case 'Snow':
        {
            picture.setAttribute("src", "./icons/snow.svg")
            break
        }
        case 'Cloud':
        {
            picture.setAttribute("src", "./icons/cloud.svg")
            break
        }
        case 'Haze':
        {
            picture.setAttribute("src", "./icons/smog.svg")
            break
        }
        case 'Fog':
        {
            picture.setAttribute("src", "./icons/smog.svg")
            break
        }
        default:
            picture.setAttribute("src", "./icons/cloud-sun.svg")
            break
    }

}
