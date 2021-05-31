import {Component, OnInit} from '@angular/core';
import {LoggerModule, LoggerService} from '@flight-workspace/logger-lib';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logger.log('Initializing aoo component');
    this.logger.debug('DEBUG: Initializing aoo component');
  }

}
