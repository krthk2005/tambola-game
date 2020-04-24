import { Component, OnInit, Input } from '@angular/core';

import { GameService } from './../services/game.service';
import { Game } from './../interfaces/game';

@Component({
  selector: '[app-completed-numbers]',
  templateUrl: './completed-numbers.component.html',
  styleUrls: ['./completed-numbers.component.css']
})
export class CompletedNumbersComponent implements OnInit {

  @Input() game:Game;
  numbers:number[][];
  constructor(private gameService:GameService) { 
    var numbers = gameService.getGameNumbers();
    this.numbers = [
      numbers.splice(0, 10),
      numbers.splice(0, 10),
      numbers.splice(0, 10),
      numbers.splice(0, 10),
      numbers.splice(0, 10),
      numbers.splice(0, 10),
      numbers.splice(0, 10),
      numbers.splice(0, 10),
      numbers.splice(0, 10)
    ]
  }

  ngOnInit() {
  }

  isCompleted(n:number):boolean {
    return this.game.completedNumbers.indexOf(n) != -1;

  }

}
