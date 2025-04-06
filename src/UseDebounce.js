import * as React from 'react';
const useDebounce = (value, delay) => {
    const [stateval, setStateVal] = React.useState(value);

    React.useEffect(()=> {
     const timer = setTimeout(()=> setStateVal(value), delay )
     return ()=> {
        clearTimeout(timer);
     }
    },[value, delay])
    return stateval;
}

const useThrottle = (value, delay) => {
    const [stateval, setStateVal] = React.useState(value);
    const lastExecuted = React.useRef(Date.now())

    React.useEffect(()=> {
        if(new Date()>= lastExecuted.current+ delay){
            setStateVal(value);
            lastExecuted.current = Date.now()
        } else {
            const timer = setTimeout(()=> {
                lastExecuted.current = Date.now();
                setStateVal(value)}, delay )
            return ()=> {
               clearTimeout(timer);
            }
        }
    
    },[value, delay])

    return stateval;
}


