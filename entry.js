[
  './src/tilesets/ascii-tileset.js',

  './src/utils.js',

  './src/classes/GridData.js',
  './src/hooks/useGrid.js',

  './src/components/styled.js',

  './src/components/App.js',
  './src/components/Grid.js',
  './src/components/Cell.js',

  './src/index.js', // important: this should be last in the list
].forEach(url => {
  const tag = `<script type="text/babel" data-type="module" data-plugins="transform-modules-umd" data-presets="react,stage-3" src="${url}" />`;
  document.body.insertAdjacentHTML('beforeend', tag);
});
