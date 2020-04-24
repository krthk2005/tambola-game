import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Game} from './../interfaces/game';

@Injectable()
export class GameService {
  private games:Game[]
  constructor() {
    this.games = JSON.parse(localStorage.getItem('games')) || [];
  }

  private storeGames() {
    localStorage.setItem('games', JSON.stringify(this.games));
  }

  getGames(): Observable<Game[]> {
    return of(this.games);
  }

  setGames(data) {
    if(data) {
      this.games = data;
    }
    this.storeGames();
  }

  getGameNumbers(): number[] {
    return Array.from(Array(91).keys()).slice(1);
  }

  createGame():Game {
    var newGame:Game = {
      id: ""+Date.now(),
      lastNumber: 0,
      remainingNumbers: this.getGameNumbers(),
      completedNumbers: [],
      firstFive: {numbers: "",name: ""},
      firstRow: {numbers: "",name: ""},
      secondRow: {numbers: "",name: ""},
      thirdRow: {numbers: "",name: ""},
      fullHouse: {numbers: "",name: ""},
      completed:false,
      updatedTime: Date.now()
    }
    this.games.push(newGame);
    this.storeGames();
    return newGame;
  }

  getGame(id:string) {
    return this.games.find(game=>game.id==id);
  }
  clearAllGames(){
    // localStorage.removeItem('games');
    localStorage.clear();
  }
}
