import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getweather(city: string, units: string) {units
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=76641db159e0ff79df3ed4af5b032abb&units=' + units );
  }
}
