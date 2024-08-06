import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ClimaService {

  url = 'http://api.openweathermap.org/data/2.5/weather?&appid=';

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any> {
    const URL = this.url + environment.api_cloud + '&q='+ ciudad;
    return this.http.get(URL)
  }
}
