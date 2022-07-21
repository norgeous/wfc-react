[
  './ascii-tileset.js',
  './utils.js',
  './class/Grid.js',
  './hooks/useGrid.js',
  './components/grid.js',
  './components/Cell.js',
  './components/App.js',
  './index.js',
].forEach(url => {
  const tag = `<script type="text/babel" data-type="module" data-plugins="transform-modules-umd" data-presets="react,stage-3" src="${url}" />`;
  document.body.insertAdjacentHTML('beforeend', tag);
});
