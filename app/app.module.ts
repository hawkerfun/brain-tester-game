import { NgModule }      from '@angular/core';

import {AppComponent} from './app.component';
import {PiramideModule} from './piramide_module/piramide.module';

@NgModule({
  imports:      [PiramideModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }
