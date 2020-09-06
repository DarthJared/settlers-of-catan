import { Component, VERSION, Input } from '@angular/core';
import { ResourceType } from '../services/resource.service';

@Component({
  selector: 'port',
  templateUrl: './port.component.html',
  styleUrls: [ './port.component.css' ]
})
export class PortComponent {
  @Input() ratio: number = 3;
  @Input() resource: ResourceType = ResourceType.WOOD;

  getBackgroundClass() {
    switch(this.resource) {
      case ResourceType.WOOD:
        return 'wood-back';
      case ResourceType.BRICK:
        return 'brick-back';
      case ResourceType.SHEEP:
        return 'sheep-back';
      case ResourceType.WHEAT:
        return 'wheat-back';
      case ResourceType.ORE:
        return 'ore-back';
      case ResourceType.ANY:
        return 'any-back';
    }
  }
}
