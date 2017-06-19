import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MenuService} from "../../app/menu.service";
import _ from "lodash";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
	public dishtypes :string[];
	public dishtype: string;
	public menu;
	public dishes;

  constructor(public navCtrl: NavController, private menuService: MenuService) {
  	this.dishtypes = ["Salad","Meat","Vegitrain","Pitiya","Addition"];
  	this.dishtype = "Meat";
  }

  ngOnInit(){
    this.menuService.getMenu().then(menu =>
    {
      this.menu = menu;
      this.dishes= _.groupBy(menu.dishes, "type");
      console.log(this.dishes);
    });
  }

}
