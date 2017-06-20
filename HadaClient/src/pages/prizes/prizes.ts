import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuService } from "../../app/menu.service";
import _ from "lodash";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class PrizesPage implements OnInit {

  constructor(private menuService: MenuService, public navParams: NavParams) {
  }

  ngOnInit() {
  }

}
