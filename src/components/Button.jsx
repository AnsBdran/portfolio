import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button className='px-6 py-2 border border-primary' {...props}>
      {children}
    </button>
  );
};

export default Button;
