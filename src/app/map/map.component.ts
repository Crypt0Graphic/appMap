import { Component, OnInit } from '@angular/core';
import { Styles } from './map-styles';
import { Markers } from './markers';

@Component({
  selector: 'ytp-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor() {}

  // draggable: boolean = false;
  lat = 40.972177;
  lng = 29.152087;
  zoom = 16.5;

  styles = Styles;
  markers = Markers;

  path0 = [{ lat: 40.972373, lng: 29.151818 }, { lat: 40.97206, lng: 29.15251 }];

  path1 = [
    { lat: 40.972585, lng: 29.152288 },
    { lat: 40.97206, lng: 29.15251 },
    { lat: 40.971875, lng: 29.152733 },
    { lat: 40.97176, lng: 29.152693 },
    { lat: 40.971742, lng: 29.152727 }
  ];

  ngOnInit() {}
}
