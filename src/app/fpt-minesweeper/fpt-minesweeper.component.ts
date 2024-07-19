import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Grid } from './grid';
import { Cell } from './cell';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fpt-minesweeper',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fpt-minesweeper.component.html',
  styleUrls: ['./fpt-minesweeper.component.css']
})

export class FptMinesweeperComponent {
  title = 'Minesweeper';
  board!: Grid;

  gridSize: number= 20;

  constructor() {
    this.reset(this.gridSize);
  }

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      alert('You lose');
    } else if (result === 'win') {
      alert('You win');
    }
  }
  
  flag(cell: Cell) {
    if (cell.status === 'flag') {
      cell.status = 'open';
    } else {
      cell.status = 'flag';
    }
  }

  reset(gridSize: number) {

    if (gridSize < 2 || gridSize > 20) {
      alert('Please enter valid Grid size (2-20).');
    } else {
      this.board = new Grid(gridSize, gridSize);
    }
  }

}
