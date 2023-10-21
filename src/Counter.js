import React from 'react'


const Counter = ({ increment, decrement, reset, newCount, handleSetValue, settingClick }) => {
    return (
        <div className='buttons'>
            <input type="number" value={newCount} onChange={handleSetValue} required placeholder='Enter A Number'/>
            <button onClick={increment} className='btn-dark increment '>Increment</button>
            <button onClick={reset} className='reset'>Reset</button>
            <button onClick={decrement} className='decrement'>Decrement</button>
            <button onClick={settingClick} className='decrement'>Set A Number</button>
        </div>
    )
}

export default Counter