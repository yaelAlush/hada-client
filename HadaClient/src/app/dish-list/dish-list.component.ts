import { Component, Input } from '@angular/core';
import { Menu } from "../models/menu.model";
import { PopoverController } from "ionic-angular";
import { DishDetailsPopupComponent } from "../dish-details-popup/dish-details-popup";


@Component({
	selector: 'dish-list',
  templateUrl: 'dish-list.html',
  inputs:['menu']
})
export class DishList {
  @Input() menu: Menu;
  constructor(public popoverCtrl: PopoverController) {
    console.log(this.menu);
  }

  presentPopover(popupEvent,dish) {
    let popover = this.popoverCtrl.create(DishDetailsPopupComponent,dish);
    popover.present({
      ev: popupEvent
    });
  }
}
