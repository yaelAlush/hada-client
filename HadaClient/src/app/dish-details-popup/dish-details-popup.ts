import { Component, OnInit } from '@angular/core';
import { ViewController } from "ionic-angular";
import { Dish } from "../models/dish.model";

@Component({
  selector: 'dish-details-popup',
  templateUrl: 'dish-details-popup.html'
})
export class DishDetailsPopupComponent implements OnInit {
  dishDetails: Dish;
  dishSegments: string = "details"
  rankingList: string[] = ["מלח", "יותר מידי שמן", "יבש"];

  constructor(public viewCtrl: ViewController) {
    this.dishDetails = this.viewCtrl.data;
  }

  ngOnInit() {
    this.rankingList = this.rankingList.concat(this.dishDetails.ingredients);
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
