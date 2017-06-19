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

  }
}
