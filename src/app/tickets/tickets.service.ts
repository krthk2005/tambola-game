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
    this.ticket.id = id;
    this.ticket.name = name;
    this.ticket.date=date;
    this.ticket.ticket = genTicket[0];
    return this.ticket;
  }
}