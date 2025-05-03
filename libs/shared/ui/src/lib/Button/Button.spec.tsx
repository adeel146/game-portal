import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './index';
import '@testing-library/jest-dom';


describe('Button', () => {
  it('renders the provided text inside the button', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onClick when not disabled', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Press</Button>);

    fireEvent.click(screen.getByText('Press'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled>Disabled</Button>);

    fireEvent.click(screen.getByText('Disabled'));
    expect(handleClick).not.toHaveBeenCalled();
  });

});
