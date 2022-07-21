import { randomFrom } from '../utils.js';
import tiles from '../ascii-tileset.js';

const tileMatcher = constraint => tileId => [
  (constraint[0] === '*' || constraint[0] === tileId[0]),
  (constraint[1] === '*' || constraint[1] === tileId[1]),
  (constraint[2] === '*' || constraint[2] === tileId[2]),
  (constraint[3] === '*' || constraint[3] === tileId[3]),
].every(check => check === true);

class Grid {
  constructor(config) {
    this.config = config;
  }

  newGrid(width, height) {
    const { unCollapsed } = this.config;
    this.grid = [
      ...Array(height).fill([
        ...Array(width).fill(unCollapsed),
      ]),
    ];
    this.grid.forEach((row, y) => row.forEach((oldValue, x) => this.partiallyCollapseCell(x, y)));
  }

  updateCell(x, y, newValue) {
    this.grid = this.grid.map((row, i) => y !== i ? row : row.map((value, j) => x !== j ? value : newValue));
  }

  partiallyCollapseCell(x, y) {
    const { outOfBounds } = this.config;
    if ((this.grid[y]?.[x] || '').includes('*')) {
      const newValue = [
        (this.grid[y - 1]?.[x] || outOfBounds)[2], // top neighbour's bottom side value
        (this.grid[y]?.[x + 1] || outOfBounds)[3], // right neighbour's left side value
        (this.grid[y + 1]?.[x] || outOfBounds)[0], // bottom neighbour's top side value
        (this.grid[y]?.[x - 1] || outOfBounds)[1], // left neighbour's right side value
      ].join('');
      this.updateCell(x, y, newValue);
    }
  }

  collapseCell(x, y) {
    this.partiallyCollapseCell(x, y);
    const value = this.grid[y][x];

    const possibilities = Object.keys(tiles).filter(tileMatcher(value));
    // console.log({ possibilities });
    if (!possibilities.length) return;

    const randomTile = randomFrom(possibilities);
    this.updateCell(x, y, randomTile);

    this.partiallyCollapseCell(x, y - 1);
    this.partiallyCollapseCell(x + 1, y);
    this.partiallyCollapseCell(x, y + 1);
    this.partiallyCollapseCell(x - 1, y);
  }

  collapseRandomHighEntropyCell() {
    const flat = this.grid.reduce((acc, row, y) => {
      return [
        ...acc,
        ...row.map((value, x) => ({
          x,
          y,
          value,
          domainSize: [...value].reduce((count, char) => char === '*' ? count + 1 : count, 0),
        })),
      ];
    }, []).filter(cell => cell.value.includes('*'));

    const sorted = flat.sort((a, b) => a.domainSize - b.domainSize);

    const lowestDomainSize = sorted[0].domainSize;

    const cells = sorted.filter(cell => cell.domainSize === lowestDomainSize);

    const nextCellToCollapse = randomFrom(cells);

    this.collapseCell(nextCellToCollapse.x, nextCellToCollapse.y);
  }
};

export default Grid;
