import { Component, Input, OnInit } from '@angular/core';
import { Menu } from "../models/menu.model";
import { PopoverController } from "ionic-angular";
import { DishDetailsPopupComponent } from "../dish-details-popup/dish-details-popup";
import { RankingItem } from "../models/ranking-item.model";
import { DishRanking } from "../models/dish-ranking.model";

@Component({
  selector: 'dish-list',
  templateUrl: 'dish-list.html',
  inputs: ['menu']
})
export class DishList implements OnInit {
  @Input() menu: Menu;
  dishRanking: DishRanking[];
  constructor(public popoverCtrl: PopoverController) {
    console.log(this.menu);
  }

  ngOnInit() {
    if (this.menu) {
      console.log(this.menu);
      this.dishRanking = this.menu.dishes.map(dish => {
        let defaultRanking = [new RankingItem("מלח"), new RankingItem("שומניות"), new RankingItem("יבש")];
        let ingredients = dish.ingredients.map(ingredient => new RankingItem(ingredient));
        return {
          dishId: dish.id,
          rankingItems: defaultRanking.concat(ingredients)
        };
      });
    }
  }

  presentPopover(popupEvent, dish) {
    let dishRanking = this.dishRanking.find(items => items.dishId == dish.id);
    let popupData = { dish: dish, dishRanking: dishRanking };
    let popover = this.popoverCtrl.create(DishDetailsPopupComponent, popupData);
    popover.present({
      ev: popupEvent
    });

    popover.onDidDismiss(dishRanking => {
      let index = this.dishRanking.findIndex(items => items.dishId == dishRanking.dishId);
      this.dishRanking[index] = dishRanking;
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
