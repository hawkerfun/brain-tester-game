import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Piramide} from './components/piramide.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [Piramide],
  exports: [Piramide]
})

export class PiramideModule {}
