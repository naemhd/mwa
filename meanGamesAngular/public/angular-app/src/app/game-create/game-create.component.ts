import { Component, OnInit } from '@angular/core';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

  title: string=""
  year: string=""
  price: string=""
  min: Number=1
  max: Number=5
  rate: Number=0

  constructor(private gamesService:GamesDataService) { }



  ngOnInit(): void {
  }

  

  public addGame(): void{

    const postData={
      title:this.title,
      year:this.year,
      price:this.price,
      minPlayers:this.min,
      maxPlayers:this.max,
      rate:this.rate,
  }

    this.gamesService.addGame(postData);
      // .then(newGame => this.game=newGame);
    
  }

}
