import { Component, OnInit } from '@angular/core';
import { ToastController } from "ionic-angular";
import {PointsService} from "../../app/points.service";
import {PrizesService} from "../../app/prizes.service";
import {Prize} from "../../app/models/prize.model";

@Component({
  selector: 'page-prizes',
  templateUrl: 'prizes.html'
})
export class PrizesPage implements OnInit {
  public points;
  public prizes: Prize[];
  constructor(private pointsService: PointsService, private prizesService: PrizesService, public toastCtrl: ToastController){
    this.points = pointsService.getPoints();
    this.prizesService.getPrizes().then(prizes => this.prizes = prizes);
  }

  ngOnInit() {
  }

  getPrize(prize){
    this.pointsService.subPoints(prize.points);
    this.points-= prize.points;
    this.presentToast(prize)
  }

  isDisabled(prize){
    return prize.points > this.points;
  }

  presentToast(prize) {
    var message;
    message= "מזל טוב! זכית ב" + prize.name;
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      cssClass: 'points-toast'

    });
    toast.present();
  }

}
