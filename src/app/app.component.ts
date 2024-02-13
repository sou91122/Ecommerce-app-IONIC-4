import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'New Arrival',
      icon: 'pricetags'
    },
    {
      title: 'Shop by Category',
      url: '/categories',
      icon: 'apps'
    },
    {
      title: 'Deals of the Day',
      url: '/deals',
      icon: 'flame'
    },
    {
      title: 'My Account',
      url: '/myaccount',
      icon: 'person'
    },
    {
      title: 'Notification',
      icon: 'notifications'
    },
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'information-circle'
    },
    {
      title: 'Help Center',
      url: '/contactus',
      icon: 'help-circle'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Legal',
      url: '/legal',
      icon: 'warning'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
