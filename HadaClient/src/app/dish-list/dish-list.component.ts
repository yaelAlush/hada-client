import { Component, Input, OnInit } from '@angular/core';
import { PopoverController, ToastController } from "ionic-angular";
import { DishDetailsPopupComponent } from "../dish-details-popup/dish-details-popup";
import {PointsService} from "../points.service";
import { Dish } from "../models/dish.model";

@Component({
  selector: 'dish-list',
  templateUrl: 'dish-list.html',
  inputs: ['menu']
})
export class DishList implements OnInit {
  @Input() menu: Dish[];

  constructor(public popoverCtrl: PopoverController, public toastCtrl: ToastController, private pointsService: PointsService) {
    console.log(this.menu);
  }

  ngOnInit(): void {
    this.updateRanks();
  }

  updateRanks(){
    this.menu.forEach(function (dish) {
      dish.rank = Math.round((dish.likedCount / dish.total) * 100);
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
    dish.total++;
    dish.swipedleft = true;
    setTimeout(function () {
      dish.swipedleft = false;
    },1000);
    this.presentToast(10, false);
    this.updateRanks();
  }

  swiperight($event, dish) {
    dish.liked = true;
    dish.total++;
    dish.likedCount++;
    dish.swipedright = true;
    setTimeout(function () {
      dish.swipedright = false;
    },1000);
    this.presentToast(10, true);
    this.updateRanks();
  }

  presentToast(points, liked) {
    var message;
    if(liked){
      message = "שמחים שאהבת :)"
    } else{
      message = "תודה על הדירוג!"
    }
    let toast = this.toastCtrl.create({
      message: message + ' זכית ב-' + points + ' נקודות',
      duration: 2000,
      cssClass: 'points-toast'

    });
    toast.present();
    this.pointsService.addPoints(10);
  }
}
