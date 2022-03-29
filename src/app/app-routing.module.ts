import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentsComponent, GamersComponent, HomeComponent, NotFoundComponent, TicTacToeComponent } from './components';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gamers', component: GamersComponent },
  { path: 'assignments', component: AssignmentsComponent },
  { path: 'tictactoe', component: TicTacToeComponent },
  { path: '', redirectTo: '/home', pathMatch: "full"},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
