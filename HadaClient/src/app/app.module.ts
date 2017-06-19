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

import { DishList } from '../app/dish-list/dish-list.component';
import {MenuService} from "./menu.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
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
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuService
  ]
})
export class AppModule {}
