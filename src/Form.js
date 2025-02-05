
import React from 'react'

function Form() {

const [inputState, setInputState] = React.useState({
    name:"",
    email:"",
    message:""
})
    const handleSubmit = (e)=> {
        e.preventDefault();
        let formdata = new FormData(e.target);
        const body = {
            "name": inputState.name,
            "email": inputState.email,
            "message": inputState.message
        }
        const URL = 'https://www.greatfrontend.com/api/questions/contact-form'
        fetch(URL, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
              },
        }).then(()=> {
            console.log("success")
        }).catch(e=> {
                console.log(e)
            })
    }

    const inputHandler = (e)=> {
        let name = e.target.name
        let val = e.target.value;
        const updatedState = {...inputState, [name]: val}
        setInputState(updatedState);
    }

  return (
    <div >
      <form style={{display:"flex", flexDirection:"column"}}  onSubmit={handleSubmit}
    //   action="https://www.greatfrontend.com/api/questions/contact-form" method='post'
      >
        <label htmlFor="name">Name: </label>
        <input type="text" name='name'id="name" onChange={inputHandler}/>

        <label htmlFor="email">Email: </label>
        <input type="text" name='email' id="email"  onChange={inputHandler}/>

        <label htmlFor="message">Message: </label>
        <textarea rows={2} id="message" onChange={inputHandler} name='message'/>
         <button >Send</button>
      </form>
    </div>
  )
}

export default Form
