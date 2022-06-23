import { observer } from 'mobx-react-lite'
import React from 'react'
import './App.css'
import counter from './store/counter'

const Counter = observer(() => {
  return (
    <div className='counter'>
        {counter.total}<br/>
        <div className='btns'>
            <button className='btn' onClick={() => counter.increment()}>+</button>
            <button className='btn' onClick={() => counter.decrement()}>-</button>
        </div>
    </div>
  )
})

export default Counter