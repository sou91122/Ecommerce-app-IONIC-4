import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.page.html',
  styleUrls: ['./productdetails.page.scss'],
})
export class ProductdetailsPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 700,
    autoplay: true
  };
  constructor(public menuCtrl: MenuController, public router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }
  cart() {
    this.router.navigateByUrl('/cart');
  }
  home() {
    this.router.navigateByUrl('/home');
  }
  wishlist() {
    this.router.navigateByUrl('/wishlist');
  }
}
