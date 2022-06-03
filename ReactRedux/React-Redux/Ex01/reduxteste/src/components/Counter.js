import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function Counter() {
    const counter = useSelector(state => state)
    const dispatch = useDispatch()
  return (
    <div>
        <div>{counter}</div>
        <button onClick={()=>{dispatch({type: 'INCREMENT'})}}>+</button>
        <button onClick={()=>{dispatch({type: 'DECREMENT'})}}>-</button>
    </div>
  )
}
