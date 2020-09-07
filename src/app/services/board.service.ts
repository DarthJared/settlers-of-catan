import { ResourceType } from "./resource.service";

export function shuffle(toShuffle: any[]) {
  toShuffle.sort(() => Math.random() - 0.5);
  return toShuffle;
}

export function addNumResources(type: ResourceType, num: number, currList: ResourceType[]): ResourceType[] {
  for (var i = 0; i < num; i++) {
    currList.push(type);
  }
  return currList;
}

export function fixBadBoard(board: ResourceType[]): ResourceType[] {
  return board;
} 

export function getTiles(boardSize: number, optimize: boolean) {
  var tiles: ResourceType[] = [];
  const numDeserts = Math.floor(boardSize);
  tiles = addNumResources(ResourceType.DESERT, numDeserts, tiles);
  const numOreBrick = 3 + ((boardSize - 1) * 2);
  tiles = addNumResources(ResourceType.ORE, numOreBrick, tiles);
  tiles = addNumResources(ResourceType.BRICK, numOreBrick, tiles);
  tiles = addNumResources(ResourceType.WOOD, numOreBrick + 1, tiles);
  tiles = addNumResources(ResourceType.WHEAT, numOreBrick + 1, tiles);
  tiles = addNumResources(ResourceType.SHEEP, numOreBrick + 1, tiles);
  tiles = shuffle(tiles);
  if (optimize) {
    tiles = fixBadBoard(tiles);
  }
  return tiles
}

export function getNumTiles(boardSize: number): number[] {
  var numTiles = [];
  const numEach = 1 + boardSize;
  for (var i = 2; i <= 12; i++) {
    if (i != 7) {
      var numLoops = numEach;
      if (i == 2 || i == 12) {
        numLoops--;
      }
      for (var j = 0; j < numLoops; j++) {
        numTiles.push(i);
      }
    }
  }
  numTiles = shuffle(numTiles);
  return numTiles;
}

export function getPorts(boardSize: number) {
  let ports = [];
  let regBoardTypes = [
    ResourceType.WOOD,
    ResourceType.BRICK,
    ResourceType.SHEEP,
    ResourceType.WHEAT,
    ResourceType.ORE,
    ResourceType.ANY,
    ResourceType.ANY,
    ResourceType.ANY,
    ResourceType.ANY
  ];
  let expandedBoardTypes = [
    ResourceType.WOOD,
    ResourceType.BRICK,
    ResourceType.SHEEP,
    ResourceType.SHEEP,
    ResourceType.WHEAT,
    ResourceType.ORE,
    ResourceType.ANY,
    ResourceType.ANY,
    ResourceType.ANY,
    ResourceType.ANY,
    ResourceType.ANY
  ];

  const types = boardSize > 1 ? expandedBoardTypes : regBoardTypes;

  for (const resType of types) {
    ports.push({
      type: resType,
      ratio: resType == ResourceType.ANY ? 3 : 2
    });
  }

  return ports;
}