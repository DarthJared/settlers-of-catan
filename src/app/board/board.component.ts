import { Component, VERSION, Input, OnInit } from '@angular/core';
import { ResourceType, resourceToDisplayString } from '../services/resource.service';
import { getTiles, getNumTiles } from '../services/board.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: [ './board.component.css' ]
})
export class BoardComponent implements OnInit {
  tiles;
  @Input() boardSize: number;

  ngOnInit() {
    const resourceTypes = getTiles(this.boardSize, false);
    const numTiles = getNumTiles(this.boardSize);
    this.tiles = [];
    let rowLength = 3;
    const turnAround = 5 + (this.boardSize - 1);
    let decreasing = false;
    let nextBreak = 2;
    let breakNeeded = false;
    let tileIndex = 0;
    let numIndex = 0;
    const numRows = 5 + (2 * (this.boardSize - 1));
    for (var i = 0; i < numRows; i++) {
      var row = [];
      for (var j = 0; j < rowLength; j++) {
        let tileNum;
        const resourceType = resourceTypes[tileIndex];
        if (resourceType != ResourceType.DESERT) {
          tileNum = numTiles[numIndex];
          numIndex++;
        }
        row.push({
          type: resourceType,
          num: tileNum,
          stepsOver: Math.abs(turnAround - rowLength)
        })
        tileIndex++;
      }
      if (!decreasing && rowLength == turnAround) {
        decreasing = true;
      }
      if (decreasing) {
        rowLength--;
      }
      else {
        rowLength++;
      }
      this.tiles.push(row);
    }
  }

  getLeftSpace(numRows, i) {
    const turnAround = Math.floor(numRows / 2);
    return Math.abs(turnAround - i) * 50 + 40;
  }
}
