import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILocation } from './ilocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private url = '/assets/location.json';

  constructor(private http: HttpClient) {}

  getLocations(callback: (error?: any, data?: any) => void) {
    this.http.get<ILocation>(this.url).subscribe(
      data => {
        callback(null, data);
      },
      error => {
        callback(error);
      }
    );
  }
}
