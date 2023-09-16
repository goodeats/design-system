import React from 'react';

export interface ButtonProps {
  label: string;
  type: 'button' | 'submit' | 'reset';
}

const defaultStyle = {
  backgroundColor: 'slategray',
  border: '1px solid gold',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const Button = (props: ButtonProps) => {
  return (
    <button style={defaultStyle} type={props.type}>
      {props.label}
    </button>
  );
};

export default Button;
