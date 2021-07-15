import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Game} from "./game-list/game-list.component";

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  constructor(private http: HttpClient) {

  }

  private apiBaseUrl: string="http://localhost:3000/api";

  public getGames(): Promise<Game[]>{
    const url: string= this.apiBaseUrl+"/games";
    return this.http.get(url).toPromise()
    .then(response=>response as Game[])
    .catch(this.handleError);

  }

  public getGame(gameId: string): Promise<Game>{
    const url: string= this.apiBaseUrl+"/games/"+gameId;
    return this.http.get(url).toPromise()
    .then(response=>response as Game)
    .catch(this.handleError);

  }

  private handleError(error:any):Promise<any>{
    return Promise.reject(error.message||error);
  }
}
