import { Component } from '@angular/core';

@Component({
  selector: 'piramide',
  templateUrl:'./templates/piramide.html'
})

export class Piramide {
  public elements = [
    [1],
    [2,3]
    [4,5,6]
    [7,8,9,10]
  ];
}
