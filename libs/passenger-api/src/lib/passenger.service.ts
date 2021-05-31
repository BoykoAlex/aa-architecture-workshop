import {Injectable} from '@angular/core';
import {Passenger} from './passenger';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const BASE_URL = `http://www.angular.at/api`;

@Injectable({
  providedIn: 'root'
})
export class PassengerService {


  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Passenger[]> {
    return this.httpClient.get<Passenger[]>(BASE_URL + '/passenger');
  }

}
