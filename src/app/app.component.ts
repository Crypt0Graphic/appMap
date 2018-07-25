import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ytp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Yeditepe Üniversitesi';

  constructor(private location: Location){}

  refresh(){
    location.reload();
  }
}


;
