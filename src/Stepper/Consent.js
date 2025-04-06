

import React from 'react'
import { FormContext } from './FormProvider'

function Consent({index}) {
      const { componentIndex,
            setComponentIndex,
            formData, 
            setFormData,
            errors, 
            setErrors
         } = React.useContext(FormContext)
    
        const ConsentHandler = (e)=> {
            setFormData((prev)=> ({
                ...prev,
                [e.target.name]:e.target.checked
            }))
        }
    
        function validate(){
            if(formData.consent){
                return false
            }  
            return true;
        }
  return (
    <div>    
            {componentIndex === index && (<div>
            <h2>Consent</h2>
            <button onClick={()=> setComponentIndex(prev=> prev-1)}>Back</button>
            <label htmlFor='consent'> consent: </label>
            <input type='checkbox' name='consent' value={formData["consent"]} onChange={ConsentHandler}/>
            <button >Submit</button>
            </div>
        )}
        
     </div>
  )
}

export default Consent;