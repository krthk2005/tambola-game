import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { PlayComponent } from './play/play.component';
import { RulesComponent } from './rules/rules.component';
import { TicketsComponent } from './tickets/tickets.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {path: '', redirectTo: '/tickets', pathMatch: 'full'},
  {path: 'games', component: GamesComponent},
  {path: 'games/:id', component: PlayComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'tickets', component: TicketsComponent},
  {path: 'game', component: GameComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
