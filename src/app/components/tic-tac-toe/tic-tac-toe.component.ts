import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent {
  board: number[][];
  private playerChangeDisabled = false;
  private boardDisabled = false;
  message = '';
  activePlayer = 1;

  dimension = 5;
  dimensionSelection = [3, 4, 5, 6, 7];

  private initialValidCount = this.dimension * 2 + 2;
  private freeCells = this.dimension **2;
  validSetCount = this.initialValidCount;

  dimensions = new FormControl();
  cpu = new FormControl(true);

  constructor() {
    this.dimensions.setValue(this.dimension);
    this.board = this.createBoard(this.dimension);
    this.dimensions.valueChanges.subscribe((num) => {
      this.board = this.createBoard(num);
      this.activePlayer = 1;
      this.playerChangeDisabled=false;
      this.playerChangeDisabled=false;
      this.initialValidCount = num * 2 + 2;
      this.freeCells = num **2;
      this.validSetCount = this.initialValidCount;
    });
  }

  reset() {
    this.board = this.createBoard(this.dimensions.value);
    this.initialValidCount = this.dimensions.value * 2 + 2;
    this.freeCells = this.dimensions.value **2;
    this.validSetCount = this.initialValidCount;
    this.activePlayer = 1;
    this.message='';
    this.playerChangeDisabled = false;
    this.boardDisabled = false;
  }

  private createBoard(dim: number) {
    const matrix = [];
    for (let i = 0; i < dim; i++) {
      const row = [];
      for (let j = 0; j < dim; j++) {
        row.push(0);
      }
      matrix.push(row);
    }
    return matrix;
  }

  get isCpuDisabled() {
    return this.playerChangeDisabled || null;
  }

  updateBoard(x: number, y: number) {
    if(this.boardDisabled)return;
    this.playerChangeDisabled = true;
    const cpu = this.cpu.value as boolean;
    if (cpu) {
      if (!this.board[x][y]) {
        this.board[x][y] = 1;
        this.freeCells--;
        if (this.checkForWinner(1)) {
          this.message = 'And the oscar goes to player 1';
          this.boardDisabled = true;
          return;
        }
        this.CPUMove(this.board);
        if (this.checkForWinner(2)) {
          this.message = 'And the oscar goes to CPU';
          this.boardDisabled = true;
          return;
        }
        if (this.checkForStall(1)) {
          this.message = 'Situazione di stallo, riprovare';
          this.boardDisabled = true;
        }
      }
    } else {
      if (!this.board[x][y]) {
        this.board[x][y] = this.activePlayer;
        this.freeCells--;
        if (this.checkForWinner(this.activePlayer)) {
          this.message = `And the oscar goes to player ${this.activePlayer}`;
          this.boardDisabled = true;
          return;
        }
        const otherPlayer = this.activePlayer == 1 ? 2 : 1;
        if (this.checkForStall(this.activePlayer) || this.checkForStall(otherPlayer)) {
          this.message = 'Situazione di stallo, riprovare';
          this.boardDisabled = true;
        }
        this.activePlayer = otherPlayer;
      }
    }
  }

  private CPUMove(board: number[][]) {
    while (true || this.freeCells) {
      let x = Math.floor(Math.random() * this.dimensions.value);
      let y = Math.floor(Math.random() * this.dimensions.value);
      if (!board[x][y]) {
        board[x][y] = 2;
        this.freeCells--;
        return;
      }
    }
  }

  private checkForWinner(player: number) {
    let board = this.board;
    let winner = false;
    //check for rows
    for (let i = 0; i < board.length; i++) {
      winner = board[i].every((cell) => cell === player);
      if (winner) {
        return true;
      }
    }

    //check for columns
    for (let i = 0; i < board.length; i++) {
      winner = this.arrayColumn(board, i).every((cell) => cell === player);
      if (winner) {
        return true;
      }
    }
    let diagonal = [];
    let second = [];
    let length = board.length;
    //check for main and second diagonal
    for (let i = 0; i < length; i++) {
      diagonal.push(board[i][i]);
      second.push(board[length - i - 1][i]);
    }
    return (
      diagonal.every((cell) => cell === player) ||
      second.every((cell) => cell === player)
    );
  }

  private checkForStall(player: number) {
    let board = this.board;
    const otherPlayer = player===1?2:1;
    this.validSetCount = this.initialValidCount;
    for (let i = 0; i < board.length; i++) {
      if (board[i].some((cell) => cell === otherPlayer)) {
        this.validSetCount--;
      }
    }
    for (let i = 0; i < board.length; i++) {
      if (this.arrayColumn(board, i).some((cell) => cell === otherPlayer)) {
        this.validSetCount--;
      }
    }
    let diagonal = [];
    let second = [];
    let length = board.length;
    for (let i = 0; i < length; i++) {
      diagonal.push(board[i][i]);
      second.push(board[length - i - 1][i]);
    }
    if (diagonal.some((cell) => cell === otherPlayer)) this.validSetCount--;
    if (second.some((cell) => cell === otherPlayer)) this.validSetCount--;
    return this.validSetCount === 0;
  }

  private arrayColumn(board: number[][], column: number) {
    return board.map((x) => x[column]);
  }
}
