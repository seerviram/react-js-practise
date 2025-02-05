import React, { useImperativeHandle } from 'react'

const About = React.forwardRef((props, ref)=> {
    const [name,setName] = React.useState("");
    const newref = React.useRef(null);
    useImperativeHandle(ref, ()=> ({
        focusinput:() => {
              newref.current.focus();
        }
    }),[])
  return (
    <div>
     <input value = {name} onChange={(e)=> setName(e.target.value)} ref= {newref} />
     <h3> Name is {name}</h3>
    </div>
  )
});

export default About;
