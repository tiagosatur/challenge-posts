import React from 'react'
import { connect } from 'react-redux'
import Counter from '../counter/Counter'

const Counters = () => (
  <div className="Counter" style={{display: 'flex', justifyContent: 'space-around'}}>
      {[0, 1, 2].map((counter) => (
        <Counter counter={counter} />
      ))}
  </div>
)


export default Counters
