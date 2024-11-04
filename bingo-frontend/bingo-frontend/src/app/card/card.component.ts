import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  cardNumbers: number[][] = this.generateCard();

  private generateCard(): number[][] {
    const card = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 9; j++) {
        row.push(Math.floor(Math.random() * 75) + 1); // Números de 1 a 75
      }
      card.push(row);
    }
    return card;
  }
}
