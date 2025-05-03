import React from 'react';
import './Button.css';

type ButtonProps = {
  color?: "primary"| "secondary"| "success";
  size?: string;
  [key: string]: any;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  size = 'medium',
  disabled,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={`button button--${color} button--${size} ${disabled ? 'button--disabled' : ''}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
