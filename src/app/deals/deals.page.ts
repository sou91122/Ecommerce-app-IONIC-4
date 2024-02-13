import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
})
export class DealsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  search() {
    this.router.navigateByUrl('/search');
  }
}
