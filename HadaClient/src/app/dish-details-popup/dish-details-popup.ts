import { Component } from '@angular/core';
import { ViewController } from "ionic-angular";
import { Dish } from "../models/dish.model";

@Component({
  selector: 'dish-details-popup',
  templateUrl: 'dish-details-popup.html'
})
export class DishDetailsPopupComponent {

  dishDetails: Dish;

  constructor(public viewCtrl: ViewController) {
    // this.dishDetails = this.viewCtrl.data;
    this.dishDetails = new Dish();
    this.dishDetails.description = "אורז, עגבנייה, תירס";
    this.dishDetails.name = "שםםםם";
    this.dishDetails.rank = 5.6;
    this.dishDetails.picture = "http://he.bcdn.biz/Images/2015/1/26/30ec8055-169c-4bfc-9bc2-15aa050038b9.jpg";
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
