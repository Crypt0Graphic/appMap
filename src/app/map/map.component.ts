import { Component, OnInit } from '@angular/core';
import { Styles } from './map-styles';

@Component({
  selector: 'ytp-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  //draggable: boolean = false;
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 16.5;
  styles = Styles;
  markers = [
    ['Rektörlük', 40.972918, 29.152632, "http://maps.google.com/mapfiles/kml/pal3/icon0.png", "./rektorluk"],
    ['Mühendislik', 40.972517, 29.151553, "http://maps.google.com/mapfiles/kml/pal3/icon1.png", "./rektorluk"],
    ['Hukuk', 40.971737, 29.153218, "http://maps.google.com/mapfiles/kml/pal3/icon2.png", "./rektorluk"]
  ]

  ngOnInit() {

  }

}
