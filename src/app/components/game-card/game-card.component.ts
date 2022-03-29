import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/shared';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() game: Game | undefined;

  ngOnInit(): void {
  }

}
