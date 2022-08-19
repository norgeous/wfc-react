import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import Input from './FormInput';
import { Radios, Button } from '../styled-components/form';

import styled from 'styled-components';

const Heading = styled.h4`
  margin: 0;
  text-align: center;
  text-decoration: underline;
`;
const Hr = styled.hr`
  width: 100%;
  color: ${({ theme }) => theme.bg[0]};
`;

const Form = () => {
  const {
    tilesetNames,
    selectedTilesetName,
    setSelectedTilesetName,
    
    size,
    setSize,

    fpsStep,
    setFpsStep,
    fps,

    debug,
    setDebug,

    setSeed,

    tiles,
    points,
    width,
    height,
    grid,

    prng,
  } = useAppContext();

  const fpsD = {
    1: 'Ⅰ',
    10: 'Ⅹ', 
    100: 'Ⅽ',
    1000: 'Ⅿ',
    Infinity: '∞',
  }[1000 / fps];

  return (
    <>
      <Heading>CONSTRAINTS</Heading>
      <Radios>
        {tilesetNames.map(name => (
          <Input
            key={name}
            type="radio"
            name="tileset"
            label={name}
            checked={name === selectedTilesetName}
            onChange={() => setSelectedTilesetName(name)}
          />
        ))}
      </Radios>

      num tiles: {tiles.length}
      <br/>
      point names: {points.join()}

      <Hr />

      <Heading>DISPLAY</Heading>
      <Input
        type="checkbox"
        label="Debug"
        checked={debug}
        onChange={() => setDebug(!debug)}
      />
      <Input
        type="number"
        label="Tile Size"
        value={size}
        onChange={event => setSize(event.target.value)}
        step={5}
        min={25}
        suffix="px"
      />

      points: {`${width+1}×${height+1}`} ({grid.length})
      <br/>
      tiles: {`${width}×${height}`} ({width*height})

      <Hr />

      <Heading>PRNG</Heading>
      <Input
        type="number"
        label="Seed"
        value={prng.seed}
        onChange={event => setSeed(event.target.value)}
      />
      seed: {prng.seed}
      <br/>
      step count: {prng.stepCount}
      <br/>
      prn: {prng.prn}
      <br/>
      prf: {prng.prf}

      <Hr />

      <Input
        type="range"
        label="Speed"
        value={fpsStep}
        onChange={event => setFpsStep(event.target.value)}
        min={0}
        max={4}
        suffix={`${fpsD} fps`}
      />
    </>
  );
};

export default Form;
