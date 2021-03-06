import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {PrizesPage} from "../pages/prizes/prizes";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  menuTypes: string[];

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
    this.initializeApp();
    this.menuTypes = ["ארוחת בוקר", "ארוחת צהריים", "ארוחת ערב"];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openMenu(type) {
    this.nav.setRoot(HomePage,{ menuType: type });
  }
  openPrizes(){
    this.nav.setRoot(PrizesPage);
  }
}
