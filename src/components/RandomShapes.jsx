import React from 'react';
import { OutlinedSquare } from './elements';

const RandomShapes = () => {
  return (
    <div>
      <OutlinedSquare />
      <img src='assets/logo_outline.svg' alt='outlined logo' className='w-32' />
      <img src='assets/dots.svg' alt='dots' />
    </div>
  );
};

export default RandomShapes;
