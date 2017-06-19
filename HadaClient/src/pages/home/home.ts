import { Component, OnInit } from '@angular/core';
import { NavController ,PopoverController} from 'ionic-angular';
import {MenuService} from "../../app/menu.service";
import { DishDetailsPopupComponent } from "../../app/dish-details-popup/dish-details-popup";
//import {DishTypes} from '../../app/models/dishtypes.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
	public dishtypes :string[];
	public dishtype: string;

  constructor(public navCtrl: NavController, private menuService: MenuService,public popoverCtrl: PopoverController) {
  	this.dishtypes = ["Salad","Meat","Vegitrain","Pitiya","Addition"];
  	this.dishtype = "Meat";
  }

  ngOnInit(){
    this.menuService.getMenu().then(function(menu){
      console.log(menu);
    })
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(DishDetailsPopupComponent,{hello:"sss"});
    popover.present({
      ev: myEvent
    });
  }

}
