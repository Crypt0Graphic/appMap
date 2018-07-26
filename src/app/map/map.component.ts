import { Component, OnInit } from '@angular/core';
import { Styles } from './map-styles';
import { Markers } from './markers';

@Component({
  selector: 'ytp-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  //draggable: boolean = false;
  lat: number = 40.972177;
  lng: number = 29.152087;
  zoom: number = 16.5;

  styles = Styles;
  markers = Markers;

  ngOnInit() {
  }

}
