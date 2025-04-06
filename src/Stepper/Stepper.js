import React from 'react'
import Profile from './Profile'
import Address from './Address'
import Consent from './Consent'
import { FormProvider } from './FormProvider'

const config = [
    {
        title:"profile",
        component: <Profile/>
    },
    {
        title:"address",
        component: <Address/>
    },
    {
        title:"cosent",
        component: <Consent/>
    }
]

function SeperateComponent ({ele,index}){
   return (<>
   <div>{React.cloneElement(ele.component,{index:index})}</div>
   </>)
}

function saveFormdata(e){
    e.preventDefault();
console.log('data')
}

function Stepper() {
  return (
    
    <FormProvider>
    <form onSubmit={saveFormdata}>
    <div style={{display:'flex'}}>
      {config.map((ele,index)=>(
        <SeperateComponent
        ele={ele}
        index={index}
        />
      ))}
    </div>
    </form>
    </FormProvider>
 
  )
}

export default Stepper
