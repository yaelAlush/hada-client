import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from "ionic-angular";
import { DishDetailsPopupComponent } from "../dish-details-popup/dish-details-popup";
import { Dish } from "../models/dish.model";

@Component({
  selector: 'dish-list',
  templateUrl: 'dish-list.html',
  inputs: ['menu']
})
export class DishList implements OnInit {
  @Input() menu: Dish[];

  constructor(public popoverCtrl: PopoverController) {
    console.log(this.menu);
  }

  ngOnInit() {
    this.menu.forEach(function (dish) {
      if (dish.rank >= 0 && dish.rank < 30) {
        dish.emoji = "/assets/emoji/unamused.png";
      }
      if (dish.rank > 30 && dish.rank < 60) {
        dish.emoji = "/assets/emoji/best.png";
      }
      if (dish.rank > 60 && dish.rank <= 100) {
        dish.emoji = "/assets/emoji/heart.png";
      }
    });
  }

  presentPopover(popupEvent, dish) {
    let popover = this.popoverCtrl.create(DishDetailsPopupComponent, dish);
    popover.present({
      ev: popupEvent
    });
  }

  swipeleft($event, dish) {
    dish.liked = false;
    dish.swipedleft = true;
    setTimeout(function () {
      dish.swipedleft = false;
    }, 1000);
  }

  swiperight($event, dish) {
    dish.liked = true;
    dish.swipedright = true;
    setTimeout(function () {
      dish.swipedright = false;
    }, 1000);
  }
}
