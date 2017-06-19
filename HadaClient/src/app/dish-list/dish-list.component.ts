import { Component, Input, OnInit } from '@angular/core';
import { Menu } from "../models/menu.model";
import { PopoverController } from "ionic-angular";
import { DishDetailsPopupComponent } from "../dish-details-popup/dish-details-popup";
import { RankingItem } from "../models/ranking-item.model";
import { DishRanking } from "../models/dish-ranking.model";
import { Dish } from "../models/dish.model";

@Component({
  selector: 'dish-list',
  templateUrl: 'dish-list.html',
  inputs: ['menu']
})
export class DishList implements OnInit {
  @Input() menu: Dish[];
  dishRanking: DishRanking[];

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
    
    this.dishRanking = this.menu.map(dish => {
      let defaultRanking = [new RankingItem("מלח"), new RankingItem("שומניות"), new RankingItem("יבש")];
      let ingredients = dish.ingredients.map(ingredient => new RankingItem(ingredient));
      return {
        dishId: dish.id,
        rankingItems: defaultRanking.concat(ingredients)
      };
    });
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
