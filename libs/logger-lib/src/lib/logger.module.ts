import {LogFormatterService} from './log-formatter.service';
import {LoggerConfig} from './logger.config';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultLogFormatterService} from './default-log-formatter.service';

const defaultFormatterConfig = [{
  provide: LogFormatterService,
  useClass: DefaultLogFormatterService
}];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class LoggerModule {
  static forRoot(config: LoggerConfig): ModuleWithProviders<LoggerModule> {

    return {
      ngModule: LoggerModule,
      providers: [
        { provide: LoggerConfig, useValue: config},

        // This is a bit special but needed as the
        // Angular Compiler needs to statically find
        // out whats going on here ...
        (!config.logFormatterType) ?
          defaultFormatterConfig :
          [{provide: LogFormatterService, useClass: config.logFormatterType}],
      ]
    }
  }

}
