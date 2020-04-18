import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuideDetailComponent } from './guide-detail/guide-detail.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'guia/:id', component: GuideDetailComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
