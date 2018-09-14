import React from 'react'
import { connect } from 'react-redux'

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
const mapStateToProps = (state) => ({
  counter: state
})

const mapDispatchToProps = (dispatch) => ({
  //Event methods are on constructor = maintains the this of the class
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () =>  dispatch({ type: 'DECREMENT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
