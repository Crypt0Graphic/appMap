import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ILocation } from './core/ilocation';
import { LocationService } from './core/location.service';
import { locations } from './core/location';


@Component({
  selector: 'ytp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string = 'Yeditepe Üniversitesi';
  pageTitle: any;
  locations: ILocation[];
  indexFilter: any = null;

  constructor(private location: Location, public router: Router, private locationService: LocationService) { }

  refresh() {
    location.reload();
  }

  ngOnInit() {

    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        var root = this.router.routerState.snapshot.root;
        while (root) {
          if (root.children && root.children.length) {
            root = root.children[0];
          } else if (root.data && root.data["title"]) {
            this.pageTitle = root.data["title"];
            return;
          } else {
            return;
          }
        }
      });

    // IIS'de Json sorun çıkardığı için servisi iptal ettim.

    // this.locationService.getLocations((error, data) => {
    //   if (error) {
    //     console.log("Hata!");
    //   }
    //   else {
    //     this.locations = data.sort((a, b) => a.name.localeCompare(b.name));
    //   }
    // });

    this.locations = locations.sort((a, b) => a.name.localeCompare(b.name));

  }
};
