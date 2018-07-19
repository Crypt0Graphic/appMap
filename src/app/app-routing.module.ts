import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { RectorateComponent } from './rectorate/rectorate.component';

const routes: Routes = [
  {path:'harita', component: MapComponent},
  {path:'rektorluk', component: RectorateComponent},
  {path:'', component: MapComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
