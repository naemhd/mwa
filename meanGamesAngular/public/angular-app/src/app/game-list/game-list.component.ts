import { Component, OnInit } from '@angular/core';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent implements OnInit {

  title: string="MEAN Games"
  // game: any={title:"title here",price:150,year:2010,publisher:"naem"}
  // games=[
    // {title:"title here",price:150,year:2010,publisher:"naem"},
    // {title:"title here",price:150,year:2010,publisher:"naem"}
  // ]
  games:Game[]=[]


  constructor(private gamesService:GamesDataService) { 

  }

  ngOnInit(): void {
    this.getGames();
    console.log(this.games);
    
  }

  public getGames(): void{
    this.gamesService.getGames()
      .then(foundGames => this.games=foundGames);
  }

}

export class Game{
  _id:string="";
  title:string ="No title";
  price:number=0.0;
  year:number = 2000
}