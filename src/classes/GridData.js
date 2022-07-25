import { randomFrom } from '../utils';

const tileMatcher = constraint => tileId => [
  (constraint[0] === '*' || constraint[0] === tileId[0]),
  (constraint[1] === '*' || constraint[1] === tileId[1]),
  (constraint[2] === '*' || constraint[2] === tileId[2]),
  (constraint[3] === '*' || constraint[3] === tileId[3]),
].every(check => check === true);

class GridData {
  constructor(config) {
    this.config = config;
    this.rawGrid = [[]];
  }

  newGrid(tileset, width, height) {
    this.tileset = tileset;
    if (!width || !height) return;
    const { unCollapsed } = this.config;
    this.rawGrid = [
      ...Array(height + 1).fill([
        ...Array(width + 1).fill(unCollapsed),
      ]),
    ];
    this.convertGrid();
  }

  getCell(x, y) {
    const points = [
      this.rawGrid[y][x],
      this.rawGrid[y][x+1],
      this.rawGrid[y+1][x+1],
      this.rawGrid[y+1][x],
    ];

    return points.join('');
  }

  convertGrid() {
    const newGrid = [];
    for (let y = 0; y < this.rawGrid.length - 1; y++) {
      const row = this.rawGrid[y];
      const newRow = [];
      for (let x = 0; x < row.length - 1; x++) {
        newRow.push(this.getCell(x,y));
      }
      newGrid.push(newRow);
    }
    this.grid = newGrid;
  }

  // updateCellCorner(x, y, newValue) {
  //   this.grid = this.grid.map((row, i) => y !== i ? row : row.map((value, j) => x !== j ? value : newValue));
  // }

  updateCell(x, y, tile) {
    // this.updateCellCorner(x, y, tile[0]);
    // this.updateCellCorner(x+1, y, tile[1]);
    // this.updateCellCorner(x+1, y+1, tile[2]);
    // this.updateCellCorner(x, y+1, tile[3]);
    this.rawGrid[y][x] = tile[0];
    this.rawGrid[y][x+1] = tile[1];
    this.rawGrid[y+1][x+1] = tile[2];
    this.rawGrid[y+1][x] = tile[0];
    this.convertGrid();
  }

  collapseCell(x, y) {
    const value = this.getCell(x, y);

    const possibilities = this.tileset.tileIds.filter(tileMatcher(value));
    if (!possibilities.length) return;

    const randomTile = randomFrom(possibilities);
    this.updateCell(x, y, randomTile);
  }

  collapseRandomHighEntropyCell() {
  }

  // collapseRandomHighEntropyCell() {
  //   const flat = this.grid.reduce((acc, row, y) => {
  //     return [
  //       ...acc,
  //       ...row.map((value, x) => ({
  //         x,
  //         y,
  //         value,
  //         domainSize: [...value].reduce((count, char) => char === '*' ? count + 1 : count, 0),
  //       })),
  //     ];
  //   }, []).filter(cell => cell.value.includes('*'));

  //   const sorted = flat.sort((a, b) => a.domainSize - b.domainSize);

  //   if (sorted[0]) { 
  //     const lowestDomainSize = sorted[0].domainSize;
  //     const cells = sorted.filter(cell => cell.domainSize === lowestDomainSize);
  //     const nextCellToCollapse = randomFrom(cells);
      
  //     this.collapseCell(nextCellToCollapse.x, nextCellToCollapse.y);
  //   }
  // }
};

export default GridData;
