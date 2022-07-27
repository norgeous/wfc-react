[
  './src/tilesets/triangles.js',
  './src/tilesets/walls.js',
  './src/tilesets/ascii-box-drawing.js',
  './src/tilesets/terrain.js',
  './src/tilesets/index.js',
  './src/utils.js',
  './src/classes/GridData.js',
  './src/hooks/useResize.js',
  './src/hooks/useRawGrid.js',
  './src/hooks/useGrid.js',
  './src/hooks/useDomainSizes.js',
  './src/components/styled.js',
  './src/components/CellDebug.js',
  './src/components/Cell.js',
  './src/components/Grid.js',
  './src/components/GithubCorner.js',
  './src/components/App.js',
  './src/index.js',
].forEach(url => {
  const tag = `<script type="text/babel" data-type="module" data-plugins="transform-modules-umd" data-presets="react,stage-3" src="${url}" />`;
  document.head.insertAdjacentHTML('beforeend', tag);
});
