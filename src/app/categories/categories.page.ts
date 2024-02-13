import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor(public menuCtrl: MenuController, public router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }
  search() {
    this.router.navigateByUrl('/search');
  }
  home() {
    this.router.navigateByUrl('/home');
  }
  subcategory() {
    this.router.navigateByUrl('/subcategory');
  }
}
