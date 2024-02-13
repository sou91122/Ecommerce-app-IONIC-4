import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyorderdetailsPageRoutingModule } from './myorderdetails-routing.module';

import { MyorderdetailsPage } from './myorderdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyorderdetailsPageRoutingModule
  ],
  declarations: [MyorderdetailsPage]
})
export class MyorderdetailsPageModule {}
