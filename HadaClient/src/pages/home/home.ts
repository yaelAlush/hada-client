import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { DishDetailsPopupComponent } from "../../app/dish-details-popup/dish-details-popup";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(DishDetailsPopupComponent,{hello:"sss"});
    popover.present({
      ev: myEvent
    });
  }



}
