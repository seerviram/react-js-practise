import React from 'react'

export default function ContactPage({name, handleClick}) {
  return (
    <div>
      <button onClick={handleClick}> Click me</button>
    </div>
  )
}
