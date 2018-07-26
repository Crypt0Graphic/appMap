import { GoogleMapsAPIWrapper } from '@agm/core';
import { Directive, Output, EventEmitter } from '@angular/core';

declare var google: any;

@Directive({
  selector: 'agm-location-marker'
})
export class AgmLocationMarker {
  marker: any;
  map: any;

  @Output('positionChanged') change: EventEmitter<any> = new EventEmitter();

  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}
  
  ngOnInit(){
    this.gmapsApi.getNativeMap().then(map => {
      if (!navigator.geolocation) return;

      this.map = map;
      navigator.geolocation.watchPosition(this.onPositionUpdate.bind(this), function(err) {
        console.log('Konum bulunamadı!:', err)
      }, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 600000
      })
    });
  }

  onPositionUpdate(position) {
    let pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }

    // Emit position change event
    this.change.emit(pos)

    if (this.marker) {
      // Update marker position
      this.marker.setPosition(pos)
      return;
    }

    // Marker needs to be created
    this.marker = new google.maps.Marker({
      map: this.map,
      position: pos,
      icon : '/assets/img/green-dot.png',
      zIndex: 10,
      animation: google.maps.Animation.DROP
    })

    // this.map.setCenter(this.marker.getPosition())
  }
}