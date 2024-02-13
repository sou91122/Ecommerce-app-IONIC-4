import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  cart() {
    this.router.navigateByUrl('/shoppingcart');
  }
  wishlist() {
    this.router.navigateByUrl('/wishlist');
  }
  myorder() {
     this.router.navigateByUrl('/myorder');
  }
}
