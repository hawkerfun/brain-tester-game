import { Component, NgModule } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: '<game-board></game-board>'
})

export class AppComponent {
  public constructor(private titleService: Title) {
      titleService.setTitle( 'Brain Tester Game' );
  }

}
