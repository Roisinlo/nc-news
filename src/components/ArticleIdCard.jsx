import { useState, useEffect } from "react";
import { getComments } from "./utils";
import CommentsList from "./CommentList";

function ArticleIdCard ({
    author,
    title,
    article_id,
    topic,
    created_at,
    votes,
    article_img_url,
    body
}){
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [viewComments, setViewComments] = useState(false)

    const handleClick= (event)=>{
        setViewComments((viewComments)=>{
            return !viewComments
        })

    }

    useEffect(()=>{
        setIsLoading(true)
       getComments(article_id)
       .then((comment)=>{

            setComments(comment)
            setIsLoading(false)
       })
    }, [])

    return(
        <section>
            <li>
                <h2>{title}</h2>
                <p>By {author}</p>
                <img src={article_img_url} alt={article_id}/>
                <p>{body}</p>
                <div>
                    <p>The topic of this article is {topic}</p>
                    <p>Votes: {votes}</p>
                    <button>Vote for article</button>
                    <p>Date: {created_at}</p>
                </div>
            </li>
            <button>Add comment</button>
                <button onClick={handleClick}>View all comments</button>
            {viewComments ? <CommentsList comments={comments}/> : null}

        </section>
    )
};

export default ArticleIdCard;