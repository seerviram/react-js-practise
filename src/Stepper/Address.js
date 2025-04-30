import React from 'react'
import { FormContext } from './FormProvider'

function Address({index,validator}) {
      const {
            setComponentIndex,
            formData, 
            setFormData,
            errors, 
            setErrors,
            validat
         } = React.useContext(FormContext)
    
        const addressHandler = (e)=> {
            const errorMessage = validator(e.target.name, e.target.value)
            setFormData((prev)=> ({
                ...prev,
                [e.target.name]:e.target.value
            }))
            setErrors((prev)=> ({
                ...prev,
                [e.target.name]: errorMessage
            }))
        }

        const checkDisable = () => {
            return Object.values(formData).some(e=> e.length==0) ||  Object.values(errors).some(e=>e.length)
        } 

  return (
    <div>    
             <div>
                <h2>Address</h2>
            <button onClick={()=> setComponentIndex(prev=> prev-1)}>Back</button>
            <label htmlFor='city'> City Name: </label>
            <input type='text'  className='city' id="city" name='city' onChange={addressHandler} value={formData['city'] ?? ""}/>
            {errors.city && <p style={{color:'red'}}>{errors.city}</p>}
            <label htmlFor='age'>Last Name: </label>
            <input type='text'  className='age' id="age" name='age' onChange={addressHandler} value={formData['age']?? ""}/>
            {errors.age && <p style={{color:'red'}}>{errors.age}</p>}
            <button onClick={(e)=> setComponentIndex(prev=> prev+1)} disabled={checkDisable()}>Continue</button>
            </div>
        
     </div>
  )
}

export default Address
