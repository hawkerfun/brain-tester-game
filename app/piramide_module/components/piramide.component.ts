import {Component} from  '@angular/core';

@Component({
  selector: 'piramide',
  templateUrl: './app/piramide_module/templates/table.html'
})

export class Piramide {
    public elements = [
      [1],
      [2,3],
      [4,5,6],
      [7,8,9,10]
    ];

}
