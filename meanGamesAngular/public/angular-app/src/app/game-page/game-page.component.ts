import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GamesDataService } from '../games-data.service';
import { Game } from '../game-list/game-list.component';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  game: Game={} as Game

  constructor(private gamesService:GamesDataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const gameId: string=this.route.snapshot.params.gameId;

    this.getGame(gameId);
    console.log(this.game);

  }

  public getGame(gameId: string): void{
    this.gamesService.getGame(gameId)
      .then(this.recivedGame)
      .catch(this.handleError);
  }

  private recivedGame(game: Game){
    console.log(game,"==============");
    this.game=game;
    

  }

  private handleError(error:any){
    console.log(error);
    
  }

}