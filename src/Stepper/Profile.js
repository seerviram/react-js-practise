import React from 'react'
import { FormContext } from './FormProvider'

function Profile({index}) {
    const { componentIndex,
        setComponentIndex,
        formData, 
        setFormData,
        errors, 
        setErrors
     } = React.useContext(FormContext)

    const profileHandler = (e)=> {
        setFormData((prev)=> ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    function validate(){
        if(formData.fname && formData.lname){
            return false
        }  
        return true;
    }

  return (
    <div>
        <h2>Profile</h2>
        {componentIndex === index && (<div>
        <label htmlFor='fname'> First Name: </label>
        <input type='text'  className='name' id="fname" name='fname' onChange={profileHandler} value={formData['fname']}/>
        <label htmlFor='lname'>Last Name: </label>
        <input type='text'  className='name' id="lname" name='lname' onChange={profileHandler} value={formData['lname']}/>
        <button onClick={()=> setComponentIndex(prev=> prev+1)} disabled={validate()}>Continue</button>
        </div>)}
    </div>
  )
}

export default Profile
