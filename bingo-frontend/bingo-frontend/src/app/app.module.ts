import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DrawComponent } from './draw/draw.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule // Adicionando CommonModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
