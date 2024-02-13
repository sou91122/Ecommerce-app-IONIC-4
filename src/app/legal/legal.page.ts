import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.page.html',
  styleUrls: ['./legal.page.scss'],
})
export class LegalPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  termsandcondition() {
    this.router.navigateByUrl('/termsandcondition');
  }
  ourstory() {
    this.router.navigateByUrl('/ourstory');
  }

}
