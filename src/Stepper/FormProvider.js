
import * as React from 'react';

export const FormContext = React.createContext({})




export const FormProvider = ({children})=> {
  const [componentIndex, setComponentIndex] = React.useState(0)
  const [formData, setFormData] = React.useState({});
  const [errors, setErrors] = React.useState({});

const formValues = {
    componentIndex,
    setComponentIndex,
    formData, 
    setFormData,
    errors, 
    setErrors
}
  return (
    <FormContext.Provider value={formValues}>
        {children}
    </FormContext.Provider>
  )
}
