import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { GamesDataService } from './games-data.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameCreateComponent } from './game-create/game-create.component';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    WelcomeComponent,
    ErrorPageComponent,
    GamePageComponent,
    GameCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: WelcomeComponent
      },
      {
        path: "games",
        component: GameListComponent
      },
      {
        path: "games/create",
        component: GameCreateComponent
      },
      {
        path: "games/:gameId",
        component: GamePageComponent
      },
      
      {
        path: "**",
        component: ErrorPageComponent
      },
    ])
  ],
  providers: [GamesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
