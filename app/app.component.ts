import { Component, NgModule } from '@angular/core';
import { Title, BrowserModule }     from '@angular/platform-browser';

import {Piramide} from './app.piramide';

@Component({
  selector: 'my-app',
  template: '<piramide></piramide>'
})

export class AppComponent {
  public constructor(private titleService: Title) {
      titleService.setTitle( 'Brain Tester Game' );
  }

}

@NgModule({
  imports:      [ BrowserModule],
  declarations: [AppComponent, Piramide]
})

export class BodyModule { }
