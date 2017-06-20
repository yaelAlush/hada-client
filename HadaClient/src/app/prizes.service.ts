import { Injectable, Inject } from "@angular/core";
import { Http, Response, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { Menu } from "./models/menu.model";
import { DishRanking } from "./models/dish-ranking.model";
import { RankingItem } from "./models/ranking-item.model";
import {Prize} from "./models/prize.model";
@Injectable()
export class PrizesService {
  private apiEndpoint: string;
  public dishRanking: DishRanking[];

  constructor(private http: Http) {
    this.apiEndpoint = '/assets/prizes.json';
  }

  getPrizes() {
    var url = `${this.apiEndpoint}`;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        return response.json() as Prize[];

      }).catch(PrizesService.handleError);
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
