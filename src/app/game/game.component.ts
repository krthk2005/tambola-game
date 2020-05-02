import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game, UserGameStatus } from './../interfaces/game';
import { Router } from '@angular/router';
import { TicketService } from '../tickets/tickets.service';

@Component({
  selector: '[app-game]',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() game: Game;
  @Input() isPlay:boolean;
  @Output() updateNumber = new EventEmitter();
  @Output() saveHistory = new EventEmitter();
  @Output() completeGame = new EventEmitter();
  isTimerStarted: boolean;
  timeInterval:any;
  progressBarInterval:any;
  progressNumber:number = 0;
  timeIntervalNumber:number;
  userNameForWinHistory;
  completedUserName:string;
  userWinStatus : UserGameStatus = {} as UserGameStatus;
  isValidUserNameEntered:boolean;

  constructor(private router: Router,public ticketService :TicketService) { }

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
  clearPreviousHistory(){
    this.userWinStatus = {} as UserGameStatus;
    this.userNameForWinHistory = "";
    this.completedUserName = "";
    this.isValidUserNameEntered = false;
  }
  saveToHistory(){
    this.saveHistory.emit();
  }

  checkWinHistory(){
    for (let pos = 0; pos < this.ticketService.tickets.length; pos++) {
      if((this.ticketService.tickets[pos].name.toLocaleLowerCase() == this.userNameForWinHistory.toLocaleLowerCase()) || (this.userNameForWinHistory.toLocaleLowerCase() == this.ticketService.tickets[pos].ticketNumber)){
        this.isValidUserNameEntered = true;
        this.completedUserName = this.ticketService.tickets[pos].name;
        for (let index = 0; index < this.ticketService.tickets[pos].ticket.length; index++) {
          if(index == 0){
            let commonNumbers = this.ticketService.tickets[pos].ticket[index].filter(item => this.game.completedNumbers.indexOf(item) > -1);
            this.userWinStatus.isFirstRowCompleted = (commonNumbers.length > 4) ? true : false;
          }else if(index == 1){
            let commonNumbers = this.ticketService.tickets[pos].ticket[index].filter(item => this.game.completedNumbers.indexOf(item) > -1);
            this.userWinStatus.isSecondRowCompleted = (commonNumbers.length > 4) ? true : false;
          }else if(index == 2){
            let commonNumbers = this.ticketService.tickets[pos].ticket[index].filter(item => this.game.completedNumbers.indexOf(item) > -1);
            this.userWinStatus.isThirdRowCompleted = (commonNumbers.length > 4) ? true : false;
          }
        }
        let userTicketNumbers = [ ...this.ticketService.tickets[pos].ticket[0], ...this.ticketService.tickets[pos].ticket[1], ...this.ticketService.tickets[pos].ticket[2]];
        this.userWinStatus.isFirstFiveCompleted = userTicketNumbers.filter(item => this.game.completedNumbers.indexOf(item) > -1).length >4 ? true : false;
        this.userWinStatus.isFullHouse = userTicketNumbers.filter(item => this.game.completedNumbers.indexOf(item) > -1).length >14 ? true : false;
      }
    }
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
