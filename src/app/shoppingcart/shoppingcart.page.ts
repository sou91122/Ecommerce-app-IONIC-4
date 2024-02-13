import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.page.html',
  styleUrls: ['./shoppingcart.page.scss'],
})
export class ShoppingcartPage implements OnInit {
  qty = 1;
  constructor(public router: Router) { }

  ngOnInit() {
  }
  IncreaseQty() {
    this.qty++;
  }

  DecreaseQty() {
    if (this.qty > 1) {
      this.qty--;
    }
  }
  wishlist() {
    this.router.navigateByUrl('/wishlist');
  }
  home() {
    this.router.navigateByUrl('/home');
  }
}
