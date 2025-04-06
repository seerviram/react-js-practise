import React from 'react'
import "./modalStyle.css"


const ModalComponent = ({open, closeHandler, children})=> {
    return (open ? <div className='ModalWrapper'>{children}</div>: null)
}
function ModalByReact() {
    const [open, setOpen] = React.useState(false)

  return (
    <div className='containerWrapper'>
      <button onClick={()=> setOpen(true)}>Open Modal</button>
      <ModalComponent open={open}>
        <div className='modalContainer'>
          <button onClick={()=> setOpen(false)}>X</button>
          <h1>First Modal</h1>
          <h1>seconds Modal</h1>
        </div>
        </ModalComponent>
    </div>
  )
}

export default ModalByReact
