import { NgModule }      from '@angular/core';

import {AppComponent, BodyModule} from './app.component';

@NgModule({
  imports:      [BodyModule],
  bootstrap:    [AppComponent]
})
export class AppModule { }
