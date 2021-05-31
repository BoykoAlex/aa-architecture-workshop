import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  static BASE_URL = `http://www.angular.at/api`;

  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<string[]> {
    return this.httpClient.get<string[]>(AirportService.BASE_URL + '/airport');
  }

}
