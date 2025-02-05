import React from 'react'
 import './Peopletable.css';

function PeopleTable(props) {
    const {userData, handleDeleteUser} = props

  return (
    <div className='container'>
      <div className='header' >
        <div>Full name</div>
        <div>Email</div>
        <div>Actions</div>
      </div>
      <div>
      {userData.map((user,index)=> (
        <div  className='row' key = {user.email}>
        <div>{user.first_name} {user.last_name} </div>
        <div>{user.email} {user.last_name} </div>
        <div onClick={()=>handleDeleteUser(user)}>Delete </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default PeopleTable
