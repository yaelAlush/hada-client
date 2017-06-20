import {Injectable, Inject} from "@angular/core";
import {Http, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PointsService {
  private apiEndpoint: string;
  public points: number = 70;

  constructor(private http: Http) {
    this.apiEndpoint = '/assets/points.json';
  }

  getPoints(){
    return this.points;
  }

  addPoints(points){
    this.points += points;
  }

  subPoints(points){
    this.points -= points;
  }

  private static handleError (error: Response | any) {
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
