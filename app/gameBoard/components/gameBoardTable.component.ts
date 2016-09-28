import {Component} from  '@angular/core';

@Component({
  selector: 'game-board',
  templateUrl: './app/gameBoard/templates/game-board.html'
})

export class GameBoard{
  public gameBoardTable=[
['1' ],
['1','1' ],
['1','1','1'],
['1','1','1','1'],
['1','1','1','1','1' ]
  ]
}
