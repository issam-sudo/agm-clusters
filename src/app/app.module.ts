import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule  } from '@agm/core';
import { AgmMarkerClustererModule } from '@agm/markerclusterer';
import { AgmClustersComponent } from './agm-clusters/agm-clusters.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
 

@NgModule({
  declarations: [
    AppComponent,
    AgmClustersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkCkK4N39fnuq86Fk0risyGhA8rMRBkZU'
    }),
 
 
    AgmMarkerClustererModule,
 
 
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
