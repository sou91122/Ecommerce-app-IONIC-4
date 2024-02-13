import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(public router: Router, public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  async sortby() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Sort By',
      mode: 'ios',
      buttons: [{
        text: 'Newest',
        handler: () => {
          console.log('Newest clicked');
        }
      }, {
        text: 'Oldest',
        handler: () => {
          console.log('Oldest clicked');
        }
      }, {
        text: 'Price Low To High',
        handler: () => {
          console.log('Price Low To High clicked');
        }
      }, {
        text: 'Price High To Low',
        handler: () => {
          console.log('Price High To Low clicked');
        }
      },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, ]
    });
    await actionSheet.present();
  }
  categories() {
    this.router.navigateByUrl('/categories');
  }
  productdetails() {
    this.router.navigateByUrl('/productdetails');
  }
  search() {
    this.router.navigateByUrl('/search');
  }
}
