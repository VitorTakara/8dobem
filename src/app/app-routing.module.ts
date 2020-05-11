import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuideDetailComponent } from './guide-detail/guide-detail.component';
import { FakeDetailComponent } from './fake-detail/fake-detail.component';
import { MapaComponent } from './mapa/mapa.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'guia/:id', component: GuideDetailComponent },
  { path: 'fakenews', component: FakeDetailComponent },
  { path: 'mapa', component: MapaComponent }
  //{ path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
