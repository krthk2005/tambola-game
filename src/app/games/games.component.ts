import { Component, OnInit } from '@angular/core';
import {GameService} from './../services/game.service';
import {Game} from './../interfaces/game';
@Component({
  selector: '[app-games]',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[];
  constructor( private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe(games => this.games = games);
  }

}
