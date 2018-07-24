import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule } from '@angular/material';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { NavComponent } from './core/nav/nav.component';
import { MapComponent } from './map/map.component';
import { RectorateComponent } from './rectorate/rectorate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MapComponent,
    RectorateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatIconModule, MatSidenavModule, MatButtonModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBo-lVaw1htN2-tuUbX0abk64re9mSIRfA'
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
