import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { CheckinComponent } from './checkin.component';
import {RouterModule} from '@angular/router';
import {LuggageUiCardModule} from '@flight-workspace/luggage/ui-card';
import {LoggerModule} from '@flight-workspace/logger-lib';

@NgModule({
  imports: [
    LoggerModule.forRoot({
      enableDebug: true
    }),
    CommonModule,
    LuggageDomainModule,
    RouterModule.forChild([
      { path: '', component: CheckinComponent }
    ]),
    LuggageUiCardModule
  ],
  declarations: [CheckinComponent],
  exports: [CheckinComponent],
})
export class LuggageFeatureCheckinModule {}
