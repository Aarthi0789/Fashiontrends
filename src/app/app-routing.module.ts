import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'LoginComponent', component:LoginComponent},
  {path:'home', component:HomeModule},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
