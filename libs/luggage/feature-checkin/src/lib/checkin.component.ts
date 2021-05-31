import { Component, OnInit} from '@angular/core';
import { CheckinFacade } from '@flight-workspace/luggage/domain';
import {LoggerService} from '@flight-workspace/logger-lib';

@Component({
  selector: 'luggage-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {


    luggageList$ = this.checkinFacade.luggageList$;


    constructor(
      private checkinFacade: CheckinFacade,
      private logger: LoggerService
    ) {}


    ngOnInit() {
        this.load();
    }

    load(): void {
        this.logger.debug('Loading checked in luggage');
        this.checkinFacade.load();
    }

}

