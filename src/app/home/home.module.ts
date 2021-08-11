import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SlidersComponent } from './sliders/sliders.component';
import { TopdesignersComponent } from './topdesigners/topdesigners.component';
import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [
    SlidersComponent,
    TopdesignersComponent,
    HomeComponent 
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
