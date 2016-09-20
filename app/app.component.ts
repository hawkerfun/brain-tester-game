import { Component, NgModule } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: '<piramide></piramide>'
})

export class AppComponent {
  public constructor(private titleService: Title) {
      titleService.setTitle( 'Brain Tester Game' );
  }

}
