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
  rankingList: Array<string>;

  constructor(public viewCtrl: ViewController) {
    this.dishDetails = this.viewCtrl.data;
  }

  ngOnInit() {
    this.rankingList=this.dishDetails.description.split(",");
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
