import { NgModule }      from '@angular/core';

import {AppComponent} from './app.component';
import {GameBoardModule} from './gameBoard/gameBoard_module';

@NgModule({
  imports:      [GameBoardModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }
