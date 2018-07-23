import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'ytp-rectorate',
  templateUrl: './rectorate.component.html',
  styleUrls: ['./rectorate.component.scss']
})
export class RectorateComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

}
