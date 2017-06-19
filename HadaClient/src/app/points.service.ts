import {Injectable, Inject} from "@angular/core";
import {Http, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PointsService {
  private apiEndpoint: string;
  public points: number;

  constructor(private http: Http) {
    this.apiEndpoint = '/assets/points.json';
  }

  getPoints(){
    if(this.points){
      return Promise.resolve(this.points);
    }
    var url =`${this.apiEndpoint}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(PointsService.handleError);
  }

  addPoints(points){
    this.points += points;
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
