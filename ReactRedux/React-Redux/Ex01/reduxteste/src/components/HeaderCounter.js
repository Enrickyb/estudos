import React from 'react'
import { useSelector } from 'react-redux'
export default function HeaderCounter() {
    const counter = useSelector(state => state)
  return (
      
    <div>
        <div>HeaderCounter</div>
        <div>{counter}</div>
    </div>
  )
}
