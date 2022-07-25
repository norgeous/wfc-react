import { randomFrom } from '../utils';

const useDomainSizes = ({ grid, collapse }) => {
  // console.log('useDomainSizes', grid);
  const flat = grid.reduce((acc, row, y) => {
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

  const collapseRandomHighEntropyCell = () => {
    if (sorted.length) { 
      const lowestDomainSize = sorted[0].domainSize;
      const cells = sorted.filter(cell => cell.domainSize === lowestDomainSize);
      const nextCellToCollapse = randomFrom(cells);
      
      collapse(nextCellToCollapse.x, nextCellToCollapse.y);
    }
  };

  return {
    domainSizes: sorted,
    collapseRandomHighEntropyCell,
  };
};

export default useDomainSizes;
