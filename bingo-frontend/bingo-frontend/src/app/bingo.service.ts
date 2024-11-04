import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BingoService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  drawNumber(): Observable<any> {
    return this.http.get(`${this.apiUrl}/draw-number`);
  }

  resetGame(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reset-game`);
  }

  generateCard(): Observable<any> {
    return this.http.get(`${this.apiUrl}/generate-card`);
  }

  checkWinner(): Observable<any> {
    return this.http.get(`${this.apiUrl}/check-winner`);
  }
}
