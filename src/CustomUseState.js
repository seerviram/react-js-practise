import React, { useLayoutEffect, useRef } from 'react'

let hookId = 0;
const stateMap = []

const useMyState = (initialValue) => {
  
    const currentID = hookId++;
    // let currentVal = 

    const [_, rerender] = React.useReducer(()=> ({}))

    function forceUpdate(){
        hookId = 0;
        rerender();
    }

    if(stateMap[currentID]){
        return stateMap[currentID]
    }

    function setValue(newval){
        let op = newval;
        if(typeof newval === 'function'){
          op = op(stateMap[currentID][0])
        }
        const valueSame = Object.is(initialValue, op)
        if(!valueSame){
            stateMap[currentID][0] = op;
            forceUpdate(); 
        }
    }
    const tuple = [initialValue, setValue]
    stateMap[currentID] = tuple;
    return tuple;
}

const useMyEffect  = (effect, dep = undefined) => {
 const prevDep = useRef(null);
 const clearResourceRef = useRef(null)


 useLayoutEffect(()=> {
   if(!dep || !prevDep.current){
    clearResourceRef.current = effect()
   } else {
   const isDepChanged = dep.some((el,i)=> prevDep.current?.[i] !== el);
   if(isDepChanged) {
      if(clearResourceRef.current){
        clearResourceRef.current()
      }
      clearResourceRef.current = effect()
    }
   }
   prevDep.current = dep;
 })


useLayoutEffect(()=> {
  return ()=> {
    if(clearResourceRef.current) {
      clearResourceRef.current()
    }
  }
},[])
}




export default function CustomUseState() {
    const [count, setCount] = useMyState(0)
    const[name, setname] = useMyState('rahul')
    const incrementCount = () => {
      setname('sunil')
      setCount((pre)=> pre+1)
    }
    console.log('updated')
    useMyEffect(()=> console.log("hello"), [count])
  return (<>
    <div>
      count is { count}, name:{name}
    </div>
    <button onClick={incrementCount}>Increment</button>
    </>
  )
}


// React's internal state storage (simplified)
const ReactInternalState = {
  stateQueue: new Map(), // Stores state for each component
  hookIndex: 0, // Tracks current hook being processed
  currentComponent: null, // Tracks the currently rendering component
};

// Fake React function to simulate useState
function useState(initialValue) {
  const componentId = ReactInternalState.currentComponent; // Identify component
  const hookIndex = ReactInternalState.hookIndex++; // Track the hook position

  if (!ReactInternalState.stateQueue.has(componentId)) {
    ReactInternalState.stateQueue.set(componentId, []);
  }

  const componentState = ReactInternalState.stateQueue.get(componentId);

  // If no previous state exists, initialize it
  if (componentState[hookIndex] === undefined) {
    componentState[hookIndex] = initialValue;
  }

  // Function to update state
  function setState(newValue) {
    componentState[hookIndex] =
      typeof newValue === "function" ? newValue(componentState[hookIndex]) : newValue;

    // Simulate re-render
    // "renderComponent(componentId)"
  }

  return [componentState[hookIndex], setState];
}
