import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-passwordotp',
  templateUrl: './passwordotp.page.html',
  styleUrls: ['./passwordotp.page.scss'],
})
export class PasswordotpPage implements OnInit {

  constructor(public router: Router, public menuCtrl: MenuController) { }

  ngOnInit() {
  }
  passwordreset() {
    this.router.navigateByUrl('/passwordreset');
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }

}
