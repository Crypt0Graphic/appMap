import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { RectorateComponent } from './buildings/rectorate/rectorate.component';
import { CommercialComponent } from './buildings/commercial/commercial.component';
import { SocialComponent } from './buildings/social/social.component';
import { FineartsComponent } from './buildings/finearts/finearts.component';
import { EngineeringComponent } from './buildings/engineering/engineering.component';
import { LawComponent } from './buildings/law/law.component';

const routes: Routes = [
  { path: 'harita', component: MapComponent },
  { path: 'rektorluk', component: RectorateComponent, data: { title: 'REKTÖRLÜK BİNASI' } },
  { path: 'hukuk', component: LawComponent, data: { title: 'HUKUK BİNASI' } },
  { path: 'muhendislik', component: EngineeringComponent, data: { title: 'MÜHENDİSLİK BİNASI' } },
  { path: 'gsf', component: FineartsComponent, data: { title: 'GÜZEL SANATLAR BİNASI' } },
  { path: 'ticari', component: CommercialComponent, data: { title: 'TİCARİ BİLİMLER BİNASI' } },
  { path: 'sosyal', component: SocialComponent, data: { title: 'SOSYAL TESİSLER' } },
  { path: '', component: MapComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
