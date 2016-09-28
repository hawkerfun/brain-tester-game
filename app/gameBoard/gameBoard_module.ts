import {NgModule} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import {GameBoard} from './components/gameBoardTable.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [GameBoard],
  exports: [GameBoard]
})

export class GameBoardModule {}
