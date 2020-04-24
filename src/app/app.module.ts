import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';

import {GameService} from './services/game.service';
import { RandomNumberComponent } from './random-number/random-number.component';
import { CompletedNumbersComponent } from './completed-numbers/completed-numbers.component';
import { PlayComponent } from './play/play.component';
import { GameComponent } from './game/game.component';
import { SortByTimePipe } from './filters/sort-by-time.pipe';
import { RulesComponent } from './rules/rules.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketService } from './tickets/tickets.service';



@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    FooterComponent,
    GamesComponent,
    HomeComponent,
    RandomNumberComponent,
    CompletedNumbersComponent,
    PlayComponent,
    GameComponent,
    SortByTimePipe,
    RulesComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GameService,TicketService],
  bootstrap: [RootComponent]
})
export class AppModule { }
