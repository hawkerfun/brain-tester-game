import {Component} from  '@angular/core';

@Component({
  selector: 'piramide',
  templateUrl: './app/piramide_module/templates/table.html'
})

export class Piramide {
    public elements = [
      ['&nbsp;  ','&nbsp;','  1','&nbsp;','&nbsp;'],
      ['&nbsp;','&nbsp;    2',3,'&nbsp;','&nbsp;'],
      ['&nbsp;  4',5,6],
      [7,8,9,4,2]
    ];

}
