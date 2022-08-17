import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import Input from './FormInput';
import DebugInfo from './DebugInfo';

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

    reset,
    randomize,

    collapseLowestEntropy,

    continual,
    toggleContinual,
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
      <div>
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
      </div>

      <Input
        type="number"
        label="Tile Size"
        value={size}
        onChange={event => setSize(event.target.value)}
        step={5}
        min={25}
        suffix="px"
      />

      <Input
        type="range"
        label="Speed"
        value={fpsStep}
        onChange={event => setFpsStep(event.target.value)}
        min={0}
        max={4}
        suffix={`${fpsD} fps`}
      />
      
      <Input
        type="checkbox"
        label="Debug"
        checked={debug}
        onChange={() => setDebug(!debug)}
      />

      <DebugInfo />
    </>
  );
};

export default Form;
