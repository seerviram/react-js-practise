

import React from 'react'
import { FormContext } from './FormProvider'

function Consent({index,validator}) {
      const { componentIndex,
            setComponentIndex,
            formData, 
            setFormData,
            errors, 
            setErrors
         } = React.useContext(FormContext)
    
        const ConsentHandler = (e)=> {
            const errorMessage = validator(e.target.name,e.target.checked )
        setFormData((prev)=> ({
            ...prev,
            [e.target.name]:e.target.checked
        }))

        setErrors((prev)=> ({
            ...prev,
            [e.target.name]:errorMessage
        }))
        }


        const submitHandler = (e) => {
            e.preventDefault();
            console.log(formData, errors)
        }

        
  return (
    <div>    
       <div> 
            <form onSubmit={submitHandler}>
            <h2>Consent</h2>
            <button onClick={()=> setComponentIndex(prev=> prev-1)}>Back</button>
            <label htmlFor='consent'> consent: </label>
            <input type='checkbox' name='consent' value={formData["consent"]} checked={formData["consent"]} onChange={ConsentHandler}/>
            {errors.consent && <p style={{color:'red'}}>{errors.consent}</p>}
            <button>Submit</button>
            </form>
            </div>
        
     </div>
  )
}

export default Consent;