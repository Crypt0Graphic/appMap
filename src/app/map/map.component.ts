import { Component, OnInit } from '@angular/core';
import { Styles } from './map-styles';
import { MatSnackBar } from '@angular/material';
import { AppComponent } from '../app.component';

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

  latCurrent: number;
  lngCurrent: number;

  styles = Styles;

  markers = [
    ['Rektörlük', 40.972918, 29.152632, "/assets/img/icon0.png", "./rektorluk"],
    ['Mühendislik', 40.972517, 29.151553, "/assets/img/icon1.png", "./muhendislik"],
    ['Hukuk', 40.971737, 29.153218, "/assets/img/icon2.png", "./hukuk"],
    ['Çamlık', 40.971946, 29.152286, "/assets/img/tree2.png"],
    ['Çamlık', 40.973489, 29.153107, "/assets/img/tree2.png"],
    ['Giriş', 40.974936, 29.153351, "/assets/img/entrance2.png"],
    ['Giriş', 40.972457, 29.149516, "/assets/img/entrance2.png"],
    ['Otopark', 40.974707, 29.152622, "/assets/img/parking2.png"],
    ['Basket Sahası', 40.971558, 29.151367, "/assets/img/basket2.png"],
    ['Tenis Sahası', 40.971491, 29.151688, "/assets/img/tennis2.png"],
    ['Futbol Sahası', 40.972329, 29.150465, "/assets/img/soccer2.png"],
    ['Erkek Yurdu', 40.974029, 29.151058, "/assets/img/bed2.png"],
    ['Kız Yurdu', 40.974029, 29.151058, "/assets/img/bed2.png"],
    ['Kız Yurdu', 40.972111, 29.153682, "/assets/img/bed2.png"],
    ['Kız Yurdu', 40.972895, 29.150302, "/assets/img/bed2.png"],
    ['Kız Yurdu', 40.970576, 29.154639, "/assets/img/bed2.png"],
    ['Kız Yurdu', 40.969211, 29.155350, "/assets/img/bed2.png"],
  ]

  // FF6F00

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
