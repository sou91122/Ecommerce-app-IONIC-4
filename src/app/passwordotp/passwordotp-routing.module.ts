import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordotpPage } from './passwordotp.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordotpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordotpPageRoutingModule {}
