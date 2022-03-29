import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AssignmentsComponent,
  GameCardComponent,
  GameCardListComponent,
  GamersComponent,
  HomeComponent,
  NavbarComponent,
  NotFoundComponent,
  TicTacToeCellComponent,
  TicTacToeComponent,
} from './components';
import { EmojifyPipe } from './shared';
import { AlertComponent } from './shared/components';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GamersComponent,
    AssignmentsComponent,
    NotFoundComponent,
    AlertComponent,
    GameCardListComponent,
    GameCardComponent,
    TicTacToeComponent,
    TicTacToeCellComponent,
    EmojifyPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
