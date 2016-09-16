import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import {Piramide}    from './app.piramide';

@Component({
  selector: 'my-app',
  template: '<h1></h1>'
})
export class AppComponent {
  public constructor(private titleService: Title ) {
      titleService.setTitle( 'Brain Tester Game' );
  }

}
