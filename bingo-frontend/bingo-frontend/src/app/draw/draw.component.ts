import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css'],
  imports: [CommonModule]  // Importa CommonModule para habilitar diretivas como *ngFor
})
export class DrawComponent {
  currentNumber: number | null = null;
  pastNumbers: number[] = [];

  drawNumber() {
    if (this.pastNumbers.length >= 75) return;

    let newNumber;
    do {
      newNumber = Math.floor(Math.random() * 75) + 1;
    } while (this.pastNumbers.includes(newNumber));

    this.currentNumber = newNumber;
    this.pastNumbers.push(newNumber);
  }

  resetDraw() {
    this.currentNumber = null;
    this.pastNumbers = [];
  }
}
