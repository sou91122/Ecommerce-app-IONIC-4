import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordotpPageRoutingModule } from './passwordotp-routing.module';

import { PasswordotpPage } from './passwordotp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordotpPageRoutingModule
  ],
  declarations: [PasswordotpPage]
})
export class PasswordotpPageModule {}
