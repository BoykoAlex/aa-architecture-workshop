/* eslint-disable no-restricted-syntax */
import { Injectable, Optional } from '@angular/core';
import { LoggerConfig } from './logger.config';
import {LogFormatterService} from './log-formatter.service';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(
    @Optional() private config: LoggerConfig,
    private logFormatter: LogFormatterService
  ) {
    console.log('CONSTRUCTOR: LogService');
  }

  debug(message: string): void {
    if (!this.config?.enableDebug) return;
    console.debug(this.logFormatter ? this.logFormatter.format(message) : message);
  }

  log(message: string): void {
    console.log(this.logFormatter ? this.logFormatter.format(message) : message);
  }
}
