# wfc-react

Tiling "Wave Function Collapse" demo

## Live Demo

https://norgeous.github.io/wfc-react/

## Development
Built with:
- `React`
- `styled-components`
- `less`

It uses `es modules` + `importmap` + `skypack` with a clientside `babel-standalone` service worker to intercept and transpile js files containing JSX.
This means we can just push the repo to GH pages without a build step.
To serve the code up locally run

```
npx serve
```

then visit http://localhost:3000/

## Lint

```
npx eslint .
```

## Example output

![Terrain output sample](terrain.png?raw=true "Terrain")
