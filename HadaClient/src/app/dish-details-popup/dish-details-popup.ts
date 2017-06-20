import { Component } from '@angular/core';
import { ViewController } from "ionic-angular";
import { Dish } from "../models/dish.model";
import { MenuService } from "../menu.service";
import { DishRanking } from "../models/dish-ranking.model";

@Component({
  selector: 'dish-details-popup',
  templateUrl: 'dish-details-popup.html'
})
export class DishDetailsPopupComponent {
  dishDetails: Dish;
  dishSegments: string = "details"
  rankingList: DishRanking;
  ingridients: string;

  constructor(public viewCtrl: ViewController, private menuService: MenuService) {
    this.dishDetails= this.viewCtrl.data;
    this.rankingList = this.menuService.dishRanking.find(ranking=>ranking.dishId==this.dishDetails.id);
    this.ingridients = this.dishDetails.ingredients.join(', ');
  }

  swipeleft($event, ingredient) {
    ingredient.liked = false;
    ingredient.swipedleft = true;
    setTimeout(function () {
      ingredient.swipedleft = false;
    }, 1000);
    let index=this.menuService.dishRanking.findIndex(ranking=>ranking.dishId==this.dishDetails.id)
    this.menuService.dishRanking[index]=this.rankingList;
  }

  swiperight($event, ingredient) {
    ingredient.liked = true;
    ingredient.swipedright = true;
    setTimeout(function () {
      ingredient.swipedright = false;
    }, 1000);
    let index=this.menuService.dishRanking.findIndex(ranking=>ranking.dishId==this.dishDetails.id)
    this.menuService.dishRanking[index]=this.rankingList;
  }
}
