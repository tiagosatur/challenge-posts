import React from 'react'
import { connect } from 'react-redux'
import Counter from '../counter/Counter'

const Counters = ({ counter, increment, decrement }) => (
  <div className="Counter" style={{display: 'flex', justifyContent: 'space-around'}}>
      {[0, 1, 2].map((item, i) => (
        <Counter key={i}
          counter={counter}
          increment={increment}
          decrement={decrement}
        />
      ))}
  </div>
)

const mapStateToProps = (state) => ({
  counter: state
})

const mapDispatchToProps = (dispatch) => ({
  //Event methods are on constructor = maintains the this of the class
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () =>  dispatch({ type: 'DECREMENT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counters)
