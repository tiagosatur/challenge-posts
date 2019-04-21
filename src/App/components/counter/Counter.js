import React from 'react'

export const Counter = ({counter, increment, decrement}) => {
  return (
    <div className="Counter">
        <h1>
          {counter}
        </h1>
        <button onClick={ decrement }>-</button>
      <button onClick={ increment }>+</button>
    </div>
  )

}


export default Counter;
