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
    ['Rektörlük', 40.972693, 29.152903, "/assets/img/number_1.png", "./rektorluk"],
    ['Mühendislik', 40.972443, 29.151457, "/assets/img/number_2.png", "./muhendislik"],
    ['Hukuk', 40.971737, 29.153218, "/assets/img/number_4.png", "./hukuk"],
    ['Güzel Sanatlar', 40.970364, 29.154142, "/assets/img/number_6.png", "./gsf"],
    ['Ticari Bilimler', 40.973722, 29.151573, "/assets/img/number_3.png", "./ticari"],
    ['Sosyal Tesisler', 40.971377, 29.152731, "/assets/img/number_5.png", "./sosyal"],
    ['Hazırlık Ek', 40.969754, 29.154992, "/assets/img/number_7.png"],
    ['Çamlık', 40.971946, 29.152286, "/assets/img/tree2.png"],
    ['Çamlık', 40.973489, 29.153107, "/assets/img/tree2.png"],
    ['Ana Kapı', 40.974831, 29.153265, "/assets/img/entrance2.png"],
    ['Alt Kapı', 40.972457, 29.149516, "/assets/img/entrance2.png"],
    ['Otopark', 40.974707, 29.152622, "/assets/img/parking2.png"],
    ['Basket Sahası', 40.971558, 29.151367, "/assets/img/basket2.png"],
    ['Tenis Sahası', 40.971491, 29.151688, "/assets/img/tennis2.png"],
    ['Futbol Sahası', 40.972329, 29.150465, "/assets/img/soccer2.png"],
    ['Erkek Yurdu', 40.974029, 29.151058, "/assets/img/bed2.png"],
    ['Kız Yurdu', 40.974029, 29.151058, "/assets/img/bed2.png"],
    ['Kız Yurdu', 40.971728, 29.153890, "/assets/img/bed2.png"],
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
