import React from 'react'
import "./style.css"

const data = [
    {
        name:"seervi",
        last:"bhola",
        age:12,
        city:" bangalore"
    },
    {
        name:"seervi",
        last:"bhola",
        age:12,
        city:" bangalore"
    },
    {
        name:"seervi",
        last:"bhola",
        age:12,
        city:" bangalore"
    }
]
function Table() {
  return (
    <div style={{margin: "10px"}}>
      <table className='tableContainer'>
        <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
        {data.map((ele)=> <tr>{Object.keys(ele).map((data, index)=> <td>{ele[data]}</td>)}</tr>)}
      </table>
    </div>
  )
}

export default Table
