import React from 'react'
import ProfileAcc from './ProfileAcc'
import About from './About'
import Common from './Common'



const config = [
    {
        title:"Profile",
        component: <ProfileAcc/>
    },
    {
        title:"About",
        component: <About/>
    }
]

function AccordianWithComponent() {
    const [index, setIndex] = React.useState(-1)
    const handler = (e)=> {
      const newVal = Number(e.target.parentElement.dataset.id)
    setIndex(prev=> prev ===newVal? -1 : newVal)
    }
  return (
    <div onClick={handler}>
      {config.map((el, id)=> (
       <div>
        <Common el={el} id={id} active={id===index} setIndex={setIndex}/>
        {/* {React.cloneElement(el.component, {
            index:id,
            active: id === index,
             onClick: ()=> setIndex(id)
        })} */}
       </div>
      ))}
    </div>
  )
}

export default AccordianWithComponent
