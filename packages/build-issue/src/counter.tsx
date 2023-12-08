import React, { useState, FC } from 'react';
import s from './counter.scss';

export interface CounterProps {
  step?: number;
}

export const Counter: FC<CounterProps> = ({ step = 1 }) => {
  const [counter, setCounter] = useState(0);

  const upHandler = () =>
    setCounter((previousCounter) => previousCounter + step);
  const downHandler = () =>
    setCounter((previousCounter) => previousCounter - step);

  return (
    <div>
      <button className={s.upButton} data-hook="up-button" onClick={upHandler}>
        +
      </button>
      <button
        className={s.downButton}
        data-hook="down-button"
        onClick={downHandler}
      >
        -
      </button>
      <div data-hook="counter">{counter}</div>
    </div>
  );
};
