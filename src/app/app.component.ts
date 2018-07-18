import { Component } from '@angular/core';
import { Styles } from './map-styles';


@Component({
  selector: 'ytp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Yeditepe Üniversitesi';
  //draggable: boolean = false;
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: 13;
  styles = Styles;
  markers = [
    ['Rektörlük', 40.972918, 29.152632, "http://maps.google.com/mapfiles/kml/pal3/icon0.png"],
    ['Mühendislik', 40.972517, 29.151553, "http://maps.google.com/mapfiles/kml/pal3/icon1.png"],
    ['Hukuk', 40.971737, 29.153218, "http://maps.google.com/mapfiles/kml/pal3/icon2.png"]
  ]

}


;
