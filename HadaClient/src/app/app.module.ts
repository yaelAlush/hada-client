import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DishDetailsPopupComponent } from './dish-details-popup/dish-details-popup';

import { DishList } from '../app/dish-list/dish-list.component';
import {MenuService} from "./menu.service";
import {PointsService} from "./points.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DishDetailsPopupComponent,
    DishList
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DishDetailsPopupComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuService,
    PointsService
  ]
})
export class AppModule {}
