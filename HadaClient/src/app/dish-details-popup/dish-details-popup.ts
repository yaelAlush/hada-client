import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ViewController } from "ionic-angular";
import { Dish } from "../models/dish.model";
import { RankingItem } from "../models/ranking-item.model";

@Component({
  selector: 'dish-details-popup',
  templateUrl: 'dish-details-popup.html'
})
export class DishDetailsPopupComponent {
  dishDetails: Dish;
  dishSegments: string = "details"
  rankingList: RankingItem[];

  constructor(public viewCtrl: ViewController) {
    let data = this.viewCtrl.data;
    this.dishDetails = data.dish;
    this.rankingList = data.dishRanking.rankingItems;
  }

  close() {
    let returnObject = { dishId: this.dishDetails.id, rankingItems: this.rankingList };
    this.viewCtrl.dismiss(returnObject);
  }

  swipeleft($event, ingredient) {
    ingredient.liked = false;
    ingredient.swipedleft = true;
    setTimeout(function () {
      ingredient.swipedleft = false;
    }, 1000);
  }

  swiperight($event, ingredient) {
    ingredient.liked = true;
    ingredient.swipedright = true;
    setTimeout(function () {
      ingredient.swipedright = false;
    }, 1000);
  }
}
