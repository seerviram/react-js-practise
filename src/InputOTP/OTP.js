import React from 'react'
import "./OTP.css";

const otp_count=5;
function OTP() {

    const  [inputOTP, setInputOTP ] = React.useState(()=> Array(otp_count).fill(""))
    const refval = React.useRef([]);

    const changeHandler = (val, index)=> {
      if(isNaN(val)){
        return;
      }
    const valCopy = [...inputOTP]
    valCopy[index]=val.slice(-1);
    setInputOTP(valCopy);
     val && refval.current[index+1]?.focus();
    }

    React.useEffect(()=> {
        refval.current[0].focus();
    },[])

    const keyDownHandler = (e,index) => {
        console.log('key', e.key)
       if(e.key === 'Backspace'){
         !e.target.value &&   refval.current[index-1]?.focus();
       }
    }

  return (
    <div>{inputOTP.map((inputEle, index)=>
    (
        <input type='text'
        ref ={input=> refval.current[index] = input}
        value={inputOTP[index]}
        onChange={(e)=> changeHandler(e.target.value, index)}
        onKeyDown={e=> keyDownHandler(e,index)}
        className='inputField'/>
    ))
    }
    </div>
  )
}

export default OTP
