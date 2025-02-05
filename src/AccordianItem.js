import React from 'react'
import "./Accordian.css";

function AccordianItem({item ,isOpen, onClick}) {
  return (
    <div onClick={onClick}>
      <h2>{item.question} <div className={isOpen ? "accordian-close": "accordian-open" }></div></h2> {""} 
      <div>
      {isOpen && <span>{item.answer}</span>}
      </div>
    </div>
  )
}

export default AccordianItem
