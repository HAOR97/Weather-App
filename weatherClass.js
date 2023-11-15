
export default class Weather {
    constructor(city, temp, humidity, windSpeed, pic) {
        this.city = city;
        this.temp = this.toCelsius(temp);
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.pic = pic
    }
    
    toCelsius(kelvin){
        return Math.round(kelvin-273)
    }
    
}