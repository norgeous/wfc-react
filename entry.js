[
  './src/utils.js',
  './src/components/styled.js',

  './src/tilesets/triangles.js',
  './src/tilesets/walls.js',
  './src/tilesets/ascii-box-drawing.js',
  './src/tilesets/terrain.js',
  './src/tilesets/terrain-png.js',
  './src/tilesets/index.js',

  './src/hooks/useResize.js',
  './src/hooks/useTileset.js',
  './src/hooks/useWFCGrid.js',
  './src/hooks/useWFCCollapser.js',

  './src/contexts/AppContext.js',
  './src/components/GridDisplay.js',
  './src/components/Grid.js',
  './src/components/ConstraintEditor.js',
  './src/components/Export.js',
  './src/components/DebugInfo.js',
  './src/components/Form.js',
  './src/components/AppHeader.js',
  './src/components/App.js',
  './src/index.js',
].forEach(url => {
  const tag = `<script type="text/babel" data-type="module" data-plugins="transform-modules-umd" data-presets="react,stage-3" src="${url}" />`;
  document.head.insertAdjacentHTML('beforeend', tag);
});
