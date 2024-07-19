import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FptMinesweeperComponent } from "./fpt-minesweeper/fpt-minesweeper.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FptMinesweeperComponent,
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
