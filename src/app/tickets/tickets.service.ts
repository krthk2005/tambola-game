import { Injectable } from "@angular/core";

@Injectable()
export class TicketService {
    ticket = {} as  ITicket;
    tickets = [] as Array<ITicket>;  

    constructor() {
      this.tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    }

    storeTickets() {
      localStorage.setItem('tickets', JSON.stringify(this.tickets));
    }

  createTicket(id, name, date, genTicket) {
    const leadingZero = (num) => `0${num}`.slice(-2);
    const formatTime = (date) =>[date.getHours(), date.getMinutes(), date.getSeconds()].map(leadingZero).join('');
    this.ticket.ticketNumber = formatTime(new Date());
    this.ticket.id = id;
    this.ticket.name = name;
    this.ticket.date=date;
    this.ticket.ticket = genTicket[0];
    return this.ticket;
  }
}