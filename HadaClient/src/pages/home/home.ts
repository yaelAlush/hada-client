import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { MenuService } from "../../app/menu.service";
import _ from "lodash";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  render(): void {
    this.isRendered = true;
  }

  public dishtypes: string[];
  public existingDishTypes: string[]
  public dishtype: string;
  public menuType: string;
  public menu;
  public dishes;
  public title;
  private isRendered: boolean;

  constructor(private menuService: MenuService, public navParams: NavParams) {
    this.isRendered = false;
    this.menuType = this.navParams.get('menuType');
    this.dishtypes = ["סלטים", "בשר", "צמחוני", "פיתייה", "תוספות"];
    this.dishtype = "סלטים";
    this.setTitle();
  }

  setTitle() {
    var date = new Date();
    var hour = date.getHours();
    if (hour < 9) {
      if (!this.menuType) {
        this.menuType = "ארוחת בוקר";
      }
      this.title = "בוקר טוב !";
      return;
    }
    if (hour < 17) {
      if (!this.menuType) {
        this.menuType = "ארוחת צהריים";
      }
      this.title = "צהריים טובים !";
      return;
    }
    if (!this.menuType) {
      this.menuType = "ארוחת ערב";
    }
    this.title = "ערב טוב !";
  }

  ngOnInit() {
    this.menuService.getMenu(this.menuType).then(menu => {
      this.menu = menu;
      this.dishes = _.groupBy(menu.dishes, "type");
      console.log(this.dishes);
      this.existingDishTypes = Object.keys(this.dishes);
    });
  }

}
