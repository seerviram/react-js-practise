import React from 'react'

const comments = [
    {
    username:'bholaram',
    comment:"Youtube is very popular",
    replies: [
        {
            username:'Sarita',
             comment:"Suman is is very popular",
             replies: [
                {
                    username:'Seervi',
                    comment:"Prime is is very popular", 
                    replies: [
                        {
                            username:'Priyanka',
                            comment:"Priyankaa is is very popular",
                        }
                    ]
                }
             ]
        },
        {
            username:'Ganesh',
             comment:"Amazon is is very popular",
        }
    ]
   },
   {
    username:'manju',
    comment:"Youtube is very famous",
    replies: [
        {
            username:'Sunil',
            comment:"Sunil is is very popular",
        }
    ]
   },
   {
    username:'Tanu',
    comment:"Metflix is very popular"
   }

]

// const NestedComment = ({comment, level})=> {
//     const [likeCount, setLikeCount] = React.useState(0);
//      const isSubComment = comment.replies && comment.replies.length>0
//     return !isSubComment ? <div> 
//     <span>{comment.username.padStart(comment.username.length + level, "-")} </span> <span>{comment.comment}</span> <button onClick={()=> setLikeCount(likeCount+1)}>Likes{likeCount}</button></div> : 
//     <>
//     <div>
//     <span>{comment.username.padStart(comment.username.length + level, "-")} </span> <span>{comment.comment}</span> <button onClick={()=> setLikeCount(likeCount+1)}>Likes{likeCount}</button>
//     </div>
//     {comment.replies.map((comment, index)=><><NestedComment comment={comment} level={level+1} key={comment.username+""+level+index}/></>)}
//     </>
// }
// function Comment() {
//   return (
//     <div>
//       {comments.map((comment, index)=> <NestedComment comment={comment} level={1} key={comment.username+""+index}/>)}
//     </div>
//   )
// }


const NestedComment = ({comments})=> {
    const [likeCount, setLikeCount] = React.useState({});
    return (
        <div class="comments" style={{padding:"10px"}}>
            {
                comments.map((comment, index)=>{
                return <>
                <div>{comment.comment}</div>
                { comment.replies && <NestedComment comments={ comment.replies }/>}
                </>
                })
            
            }

        </div>
    )
}
function Comment() {
  return (
    <div>
      <NestedComment comments = {comments}/>
    </div>
  )
}



export default Comment
