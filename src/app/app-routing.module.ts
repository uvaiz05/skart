import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserbuyerComponent } from './userbuyer/userbuyer.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"registerb",component:UserbuyerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
