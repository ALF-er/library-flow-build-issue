import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Counter } from '../counter';

describe('Counter', () => {
  it('renders Counter component with initial value', async () => {
    const { getByTestId } = render(<Counter />);
    expect((await getByTestId('counter')).textContent).toEqual('0');
  });

  it('increment by 1 when no step was passed', async () => {
    const { findByTestId } = render(<Counter />);
    fireEvent.click(await findByTestId('up-button'));
    expect((await findByTestId('counter')).textContent).toEqual('1');
  });

  it('decrement by 1 when no step was passed', async () => {
    const { findByTestId } = render(<Counter />);
    fireEvent.click(await findByTestId('down-button'));
    expect((await findByTestId('counter')).textContent).toEqual('-1');
  });

  it('increment by 3 when passing "step=3"', async () => {
    const { findByTestId } = render(<Counter step={3} />);
    fireEvent.click(await findByTestId('up-button'));
    expect((await findByTestId('counter')).textContent).toEqual('3');
  });

  it('decrement by 3 when passing "step=3"', async () => {
    const { findByTestId } = render(<Counter step={3} />);
    fireEvent.click(await findByTestId('down-button'));
    expect((await findByTestId('counter')).textContent).toEqual('-3');
  });
});
