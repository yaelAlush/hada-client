import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MenuService} from "../../app/menu.service";
//import {DishTypes} from '../../app/models/dishtypes.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
	public dishtypes :string[];
	public dishtype: string;

  constructor(public navCtrl: NavController, private menuService: MenuService) {
  	this.dishtypes = ["Salad","Meat","Vegitrain","Pitiya","Addition"];
  	this.dishtype = "Meat";
  }

  ngOnInit(){
    this.menuService.getMenu().then(function(menu){
      console.log(menu);
    })
  }

}
