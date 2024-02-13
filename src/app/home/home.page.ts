import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    speed: 700,
    autoplay: true
  };
  slidecat = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 4,
    spaceBetween: 5,
  };
  constructor(public router: Router) {}
  product() {
    this.router.navigateByUrl('/product');
  }
  search() {
    this.router.navigateByUrl('/search');
  }
  cart() {
    this.router.navigateByUrl('/shoppingcart');
  }
}
