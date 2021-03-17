import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
 import { AgmCoreModule } from '@agm/core/core.module';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer/js-marker-clusterer.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkCkK4N39fnuq86Fk0risyGhA8rMRBkZU'
    }),
 
 
    AgmJsMarkerClustererModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
