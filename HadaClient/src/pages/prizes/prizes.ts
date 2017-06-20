import { Component, OnInit } from '@angular/core';
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
  constructor(private pointsService: PointsService, private prizesService: PrizesService){
    this.points = pointsService.getPoints();
    this.prizesService.getPrizes().then(prizes => this.prizes = prizes);
  }

  ngOnInit() {
  }

  getPrize(prize){
    this.pointsService.subPoints(prize.points);
    this.points-= prize.points;
  }

  isDisabled(prize){
    return prize.points > this.points;
  }

}
