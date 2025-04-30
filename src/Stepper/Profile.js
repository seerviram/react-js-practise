import React from 'react'
import { FormContext } from './FormProvider'

function Profile({index,validator}) {
    const {
        setComponentIndex,
        formData, 
        setFormData,
        errors, 
        setErrors
     } = React.useContext(FormContext)

    const profileHandler = (e)=> {
        const errorMessage = validator(e.target.name,e.target.value )
        setFormData((prev)=> ({
            ...prev,
            [e.target.name]:e.target.value
        }))

        setErrors((prev)=> ({
            ...prev,
            [e.target.name]:errorMessage
        }))
    }
console.log("errors",errors, formData)

const checkDisable = () => {
    return Object.values(formData).some(e=> e.length==0) ||  Object.values(errors).some(e=>e.length)
} 
  return (
    <div>
        <h2>Profile</h2>
        <div>
        <label htmlFor='fname'> First Name: </label>
        <input type='text'  className='name' id="fname" name='fname' onChange={profileHandler} value={formData['fname']?? ""}/>
        {errors.fname && <p style={{color:'red'}}>{errors.fname}</p>}
        <label htmlFor='lname'>Last Name: </label>
        <input type='text'  className='name' id="lname" name='lname' onChange={profileHandler} value={formData['lname'] ?? ""}/>
        {errors.lname && <p style={{color:'red'}}>{errors.lname}</p>}
        <button onClick={()=> setComponentIndex(prev=> prev+1)} disabled={checkDisable()}>Continue</button>
        </div>
    </div>
  )
}

export default Profile
