import React from 'react'

function Common({id,el, active, setIndex}) {
  return (
    <div data-id={id} className='hello'>
      <p>{el.title}</p>
      {active && React.cloneElement(el.component)}
    </div>
  )
}

export default Common
