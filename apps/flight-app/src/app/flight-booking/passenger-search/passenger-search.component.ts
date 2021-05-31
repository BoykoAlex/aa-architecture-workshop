import {Component, ViewEncapsulation} from '@angular/core';
import {Passenger, PassengerService} from '@flight-workspace/passenger-api';

@Component({
  selector: 'app-passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PassengerSearchComponent {

  passengers: Passenger[] = [];

  constructor(private passengerService: PassengerService) {
  }

  ngOnInit() {
    this.passengerService.findAll().subscribe(passengers => {
      this.passengers = passengers;
    });
  }
}
