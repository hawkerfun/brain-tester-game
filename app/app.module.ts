import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {Piramide} from './app.piramide';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, Piramide ],
  bootstrap:     [AppComponent]
})
export class AppModule { }
