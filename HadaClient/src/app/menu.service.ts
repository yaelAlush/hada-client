import { Injectable, Inject } from "@angular/core";
import { Http, Response, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { Menu } from "./models/menu.model";
import { DishRanking } from "./models/dish-ranking.model";
import { RankingItem } from "./models/ranking-item.model";
@Injectable()
export class MenuService {
  private apiEndpoint: string;
  public dishRanking: DishRanking[];

  constructor(private http: Http) {
    this.apiEndpoint = '/assets/menu.json';
  }

  getMenu(type:string) {
    var url = `${this.apiEndpoint}`;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        let menus = response.json() as Menu[];
        let wantedMenu = menus.find(menu=>menu.type==type);
        this.dishRanking = wantedMenu.dishes.map(dish => {
          let defaultRanking = [new RankingItem("מלח"), new RankingItem("שומניות"), new RankingItem("מידת עשייה")];
          let ingredients = dish.ingredients.map(ingredient => new RankingItem(ingredient));
          return {
            dishId: dish.id,
            rankingItems: defaultRanking.concat(ingredients)
          };
        });
        return wantedMenu;
      }).catch(MenuService.handleError);
  }



  private static handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
