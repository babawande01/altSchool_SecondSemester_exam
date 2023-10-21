import Counter from './Counter';
import React, { useState } from 'react';

const CounterPage = () => {
    const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState('');

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const handleSetValue = (e) => {
    setNewCount(Number(e.target.value));
 };

 const settingClick = () => {
  setCount(newCount);
  setNewCount('');

 }
  return (
    <div>
        <h1 className='title'>Counter App</h1>
      <div className='card'>
        
        <h1 className='display-count'>{count}</h1>
        
        <Counter
          count={count}
          increment={increment}
          decrement={decrement}
          reset={reset}
          setCount={setCount}
          newCount={newCount}
          handleSetValue={handleSetValue}
          settingClick={settingClick}
        />
      </div>
    </div>
  )
}

export default CounterPage