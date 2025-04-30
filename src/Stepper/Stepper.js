import React from 'react'
import Profile from './Profile'
import Address from './Address'
import Consent from './Consent'
import { FormContext, FormProvider } from './FormProvider'

const ageRegex = /^[0-9]{1,2}$/
const FnameRegex = /^[a-zA-Z]{3,6}$/
const LnameRegex = /^[a-zA-Z]{3,6}$/
const cityregex = /^[a-zA-Z]{4,}$/

function ValidateProfileData(val, value){
  let errorMessage=""
  if(val === "fname"){
      if(!FnameRegex.test(value)){
        errorMessage = 'first name not correct'
      }
  }

  if(val === "lname"){
    if(!LnameRegex.test(value)){
      errorMessage = 'Last name not correct'
    }
}
return errorMessage
}

function ValidateAddressData(val, value){
  let errorMessage=""
  if(val === "city"){
      if(!cityregex.test(value)){
        errorMessage = 'city name not correct'
      }
  }

  if(val === "age"){
    if(!ageRegex.test(value)){
      errorMessage = 'age not correct'
    }
}
return errorMessage
}
function ValidateConsentData(val, value){
  if(value===true){
    return ""
  }
  return "please accept"
}

const config = [
    {
        title:"profile",
        component: Profile,
        validate: function (val, value){
                  return ValidateProfileData(val, value)
        }
    },
    {
        title:"address",
        component: Address,
        validate: function (val, value){
          return ValidateAddressData(val, value)
}
    },
    {
        title:"cosent",
        component: Consent,
        validate: function (val, value){
          return ValidateConsentData(val, value)
}
    }
]

// function SeperateComponent ({ele,index}){
//   console.log("hello")
//    return (<>
//    <div>{React.cloneElement(ele.component,{index:index})}</div>
//    </>)
// }

// function saveFormdata(e){
//     e.preventDefault();

// }

function FormComponent(){

      const { componentIndex } = React.useContext(FormContext)
      const ComponentToRender = config[componentIndex].component;
      return <ComponentToRender index={componentIndex} validator={config[componentIndex].validate}/>
}

function Stepper() {
  return (
    <FormProvider>
         <FormComponent/>
    {/* <form onSubmit={saveFormdata}>
        <div style={{display:'flex'}}>
          {config.map((ele,index)=>(
            <SeperateComponent
              ele={ele}
              index={index}
            />
          ))}
        </div>
    </form> */}
    </FormProvider>
 
  )
}

export default Stepper
