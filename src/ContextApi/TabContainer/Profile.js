import React from 'react'
import { useTabContext } from './Tab'

function Profile() {
  const {data, onChangeState} = useTabContext();
    const handleChange = (e) => {
        const  name = e.target.name;
        onChangeState((prev)=> ({
            ...prev,
            [name]: e.target.value
        }))
    }
  return (
    <div>
        <label for="age"> Age </label>
        <input type='text' name='age' id='age' onChange={handleChange}/>
        

        <label for="name"> name </label>
        <input type='text' name='name' id='name' onChange={handleChange}/>
        {[...Array(10).keys()].map((ele)=> <div>{ele+1}</div>)}
    </div>
  )
}

export default Profile
