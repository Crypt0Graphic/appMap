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
  lat: number = 40.971694;
  lng: number = 29.152607;
  zoom: number = 16.5;

  latCurrent: number;
  lngCurrent: number;

  styles = Styles;

  markers = [
    ['Rektörlük', 40.972918, 29.152632, "/assets/img/icon0.png", "./rektorluk"],
    ['Mühendislik', 40.972517, 29.151553, "/assets/img/icon1.png", "./muhendislik"],
    ['Hukuk', 40.971737, 29.153218, "/assets/img/icon2.png", "./hukuk"]
  ]

  ngOnInit() {
    this.getUserLocation();
    
  }

  private getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
        this.latCurrent = position.coords.latitude;
        this.lngCurrent = position.coords.longitude;
      });
    }
  }

}
