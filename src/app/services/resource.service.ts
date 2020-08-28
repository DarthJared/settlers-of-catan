export enum ResourceType {
  SHEEP,
  ORE,
  WHEAT,
  BRICK,
  WOOD,
  DESERT
}

export const resourceToDisplayString = {
  [ResourceType.SHEEP]: 'Sheep',
  [ResourceType.ORE]: 'Ore',
  [ResourceType.WHEAT]: 'Wheat',
  [ResourceType.BRICK]: 'Brick',
  [ResourceType.WOOD]: 'Wood',
  [ResourceType.DESERT]: 'Desert'
}