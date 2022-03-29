import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-cell',
  templateUrl: './tic-tac-toe-cell.component.html',
  styleUrls: ['./tic-tac-toe-cell.component.scss'],
})
export class TicTacToeCellComponent {
  @Input() cell: null |number = null;
  constructor() {}

  get cellType() {
    switch (this.cell) {
      case 1:
        return '❌';
      case 2:
        return '⭕';
      default:
        return ' ';
    }
  }
}
