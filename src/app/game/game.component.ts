import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from './../interfaces/game';
import { Router } from '@angular/router';

@Component({
  selector: '[app-game]',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() game: Game;
  @Input() isPlay:boolean;
  @Output() updateNumber = new EventEmitter();
  @Output() completeGame = new EventEmitter();
  isTimerStarted: boolean;
  timeInterval:any;
  progressBarInterval:any;
  progressNumber:number = 0;
  timeIntervalNumber:number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  startGame(event) {
    event.stopPropagation();
    this.router.navigate(['/games', this.game.id]);
  }

  onUpdateNumber() {
    this.updateNumber.emit();
    console.log(this.timeInterval);
  }

  startTimer(){
    if(this.timeIntervalNumber>0 && !this.isTimerStarted){
      this.startProgressBarIncrement();
      this.timeInterval = setInterval(() => {
        this.onUpdateNumber();
        this.startProgressBarIncrement();
      }, this.timeIntervalNumber * 1000);

      // this.progressBarInterval = setInterval(function(){ 
      //   setInterval(function(){ 
      //     this.progressNumber=this.progressNumber+10;
      //   }, 1000);
      // }, this.timeIntervalNumber * 1000);
      this.isTimerStarted=true;
    }else{
      this.isTimerStarted=false;
      clearInterval(this.timeInterval);
      clearInterval(this.progressBarInterval);
    }
  }
  startProgressBarIncrement(){
    this.progressNumber = 0;
    clearInterval(this.progressBarInterval);
    this.progressBarInterval = setInterval(()=> {this.prgressBarIncreement();}, this.timeIntervalNumber*10);
  }
  prgressBarIncreement() {
    if(this.progressNumber<100) {
     this.progressNumber++;
     console.log( 'Currently at ' + this.progressNumber )
    } else {
     clearInterval(this.progressBarInterval);
    }
   }
   

  onCompleteGame() {
    this.completeGame.emit();
  }

}
