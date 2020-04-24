import { Component, OnInit } from '@angular/core';
import { TicketService } from './tickets.service';

declare function require(name:string);
var tambola = require('tambola-generator');

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  genTicket:any[]=[];
  userName:string;
  ticket: ITicket;
  noUserName: boolean;

  constructor(public ticketService :TicketService) { }

  ngOnInit() {
  }
  generateTicket(){
    if(this.userName){
      this.noUserName = false;
      this.genTicket = [];
      this.genTicket.push(tambola.getTickets(1));
      this.ticket = {} as  ITicket;
      this.ticket = this.ticketService.createTicket(1,this.userName, new Date(), this.genTicket[0]);
    }else{
      this.noUserName = true;
    }
  }
  freezeTicket(){
    if(this.genTicket){
      this.ticketService.tickets.push(this.ticket);
      this.ticketService.storeTickets();
      this.ticketService.ticket  = {} as  ITicket;
      this.userName = "";
      this.genTicket = [];
    }
  }
}
