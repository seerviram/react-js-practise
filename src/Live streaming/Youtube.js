import React, { useEffect } from 'react'
import "./mystyle.css"

const statements = [
    "The sky is blue.",
    "JavaScript is fun to learn.",
    "Coding challenges improve problem-solving skills.",
    "Today is a great day to write some code.",
    "Front-end development involves creativity and logic.",
    "Consistency is the key to mastering programming.",
    "Every line of code brings you closer to your goals."
  ];
  
  // Function to generate a random statement
  function generateRandomStatement() {
    const randomIndex = Math.floor(Math.random() * statements.length);
    return statements[randomIndex];
  }

function Youtube() {
    const [comments, setComments] = React.useState([]);
    useEffect(()=> {
    const id =  setInterval(()=> {
        const comment = generateRandomStatement();
        setComments(comments=> [comment,...comments])
     },10000)
     return ()=> {
        clearInterval(id)
     }
    },[])
  return (
    <div className='container'>
        <div className='messageContainer'>
        {comments.map((comment, index)=> <div key={index}>{comment}</div>)}
        </div>
    </div>
    // <div className='outer'>
    //     <div className='inner'>
    //     </div>
    //     </div>
  )
}

export default Youtube
