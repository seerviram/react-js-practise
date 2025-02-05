import React from 'react'
import { useTabContext } from './Tab';

function Interest() {
    const {data, onChangeState} = useTabContext();
  return (
    <div>
      <span>{data.name}, is {data.age} year old</span>
    </div>
  )
}

export default Interest
