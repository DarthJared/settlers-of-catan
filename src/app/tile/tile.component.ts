import { Component, VERSION, Input } from '@angular/core';
import { ResourceType, resourceToDisplayString } from '../services/resource.service';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: [ './tile.component.css' ]
})
export class TileComponent  {
  @Input() type: ResourceType;
  @Input() num: number;

  getResourceDisplay(): string {
    return resourceToDisplayString[this.type];
  }

  getBackgroundClass(): string {
    switch(this.type) {
      case ResourceType.BRICK:
        return 'brick-back';
      case ResourceType.WOOD:
        return 'wood-back';
      case ResourceType.SHEEP:
        return 'sheep-back';
      case ResourceType.WHEAT:
        return 'wheat-back';
      case ResourceType.ORE:
        return 'ore-back';
      case ResourceType.DESERT:
        return 'desert-back';
    }
  }

  getNumDotsArray() {
    const numDots = this.num < 8 ? this.num - 1 : 13 - this.num;
    return Array(numDots || 0);
  }
}
