import { useState } from "react";
import { postNewComment } from "./utils";

function PostComment({article_id, setComments}){
const [username, setUsername] = useState('');
const [body, setBody] = useState('');
const [err, setErr] = useState(null);

const handleSubmit= (event)=> {
    event.preventDefault()
    const shellComment = {
       username: username,
        body: body,
    }
    postNewComment(article_id, shellComment)
    .then((resComment)=>{
        setComments((currentComment)=>[resComment, ...currentComment]);
    }).catch((err)=>{
        setErr("Uh oh, please try again")
    })
}

    return err ? <p>{err}</p> : (
        <form  className='addComment' onSubmit={handleSubmit}>
            <h3>Fill in all fields to submit your comment</h3>
             <section>
            <label> Comment:  
                <textarea type='text' onChange={(event)=> setBody(event.target.value)}/>
            </label>
            <label> Username: 
                <input type='text' onChange={(event)=> setUsername(event.target.value)}/>
            </label>
                <input type="submit" value="Submit" />
            </section>
            </form>
        
    )
}
export default PostComment;