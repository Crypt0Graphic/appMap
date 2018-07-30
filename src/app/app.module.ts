import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule, MatSnackBarModule, MatListModule } from '@angular/material';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { NavComponent } from './core/nav/nav.component';
import { MapComponent } from './map/map.component';
import { AgmLocationMarker } from './map/location.directive';

import { RectorateComponent } from './buildings/rectorate/rectorate.component';
import { LawComponent } from './buildings/law/law.component';
import { FineartsComponent } from './buildings/finearts/finearts.component';
import { EngineeringComponent } from './buildings/engineering/engineering.component';
import { SocialComponent } from './buildings/social/social.component';
import { CommercialComponent } from './buildings/commercial/commercial.component';
import { LocationService } from './core/location.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MapComponent,
    RectorateComponent,
    AgmLocationMarker,
    LawComponent,
    FineartsComponent,
    EngineeringComponent,
    SocialComponent,
    CommercialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatIconModule, MatSidenavModule, MatButtonModule, MatSnackBarModule, MatListModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBo-lVaw1htN2-tuUbX0abk64re9mSIRfA'
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
