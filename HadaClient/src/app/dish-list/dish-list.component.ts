import { Component, Input } from '@angular/core';
import {Menu} from "../models/menu.model";


@Component({
	selector: 'dish-list',
  templateUrl: 'dish-list.html',
  inputs:['menu']
})
export class DishList {
  @Input() menu: Menu;
  constructor() {
    console.log(this.menu);
  }

  swipeleft($event,dish){
    dish.liked=false;
    dish.swipedleft = true;
    setTimeout(function(){
      dish.swipedleft = false;
    },1000);
  }
  swiperight($event,dish){
    dish.liked = true;
    dish.swipedright = true;
    setTimeout(function(){
      dish.swipedright = false;
    },1000);
  }
}

