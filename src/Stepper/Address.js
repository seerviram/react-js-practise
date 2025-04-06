import React from 'react'
import { FormContext } from './FormProvider'

function Address({index}) {
      const { componentIndex,
            setComponentIndex,
            formData, 
            setFormData,
            errors, 
            setErrors
         } = React.useContext(FormContext)
    
        const addressHandler = (e)=> {
            setFormData((prev)=> ({
                ...prev,
                [e.target.name]:e.target.value
            }))
        }
    
        function validate(){
            if(formData.city && formData.age){
                return false
            }  
            return true;
        }
  return (
    <div>    
            {componentIndex === index && (<div>
                <h2>Address</h2>
            <button onClick={()=> setComponentIndex(prev=> prev-1)}>Back</button>
            <label htmlFor='city'> City Name: </label>
            <input type='text'  className='city' id="city" name='city' onChange={addressHandler} value={formData['city']}/>
            <label htmlFor='age'>Last Name: </label>
            <input type='text'  className='age' id="age" name='age' onChange={addressHandler} value={formData['age']}/>
            <button onClick={()=> setComponentIndex(prev=> prev+1)} disabled={validate()}>Continue</button>
            </div>)}
        
     </div>
  )
}

export default Address
