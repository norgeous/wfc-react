import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../contexts/AppContext';
import { Button } from '../styled-components/form';

const Heading = styled.h4`
  margin: 15px 0 5px;
`;

const DebugInfo = () => {
  const {
    tiles,
    points,
    width,
    height,
    grid,
    seed, pointer, float, next,
  } = useAppContext();

  return (
    <div style={{fontSize: 10}}>
      <Heading>CONSTRAINTS</Heading>
      num tiles: {tiles.length}
      <br/>
      point names: {points.join()}


      <Heading>GRID DISPLAY</Heading>
      points: {`${width+1}×${height+1}`} ({grid.length})
      <br/>
      tiles: {`${width}×${height}`} ({width*height})

      <Heading>PRNG</Heading>
      seed: {seed}
      <br/>
      pointer: {pointer}
      <br/>
      float: {float}
      <Button onClick={next}>Next PRNG</Button>
    </div>
  );
};

export default DebugInfo;
