import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawComponent } from './draw/draw.component';
import { CardComponent } from './card/card.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, DrawComponent, CardComponent]
})
export class AppComponent {
  showCard: boolean = false;

  toggleCard() {
    this.showCard = !this.showCard;
  }
}
