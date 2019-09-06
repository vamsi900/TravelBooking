import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import { CalendarModule } from "ion2-calendar";

import {FlightService} from "../providers/flight-service";
import {CruiseService} from "../providers/cruise-service";
import {TrainService} from "../providers/train-service";
import {WeatherProvider} from '../providers/weather';
import {MessageService} from '../providers/message-service-mock';

import { PipesModule } from '../pipes/pipes.module';

import {tripIonicApp} from "./app.component";

@NgModule({
  declarations: [
    tripIonicApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(
      tripIonicApp,
      {
        preloadModules: true,
        iconMode: 'md',
        mode: 'md'
      }
    ),
    IonicStorageModule.forRoot({
      name: '__tripIonicDB',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    CalendarModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    tripIonicApp
  ],
  providers: [
    FlightService,
    CruiseService,
    TrainService,
    MessageService,
    WeatherProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})

export class AppModule {
}
