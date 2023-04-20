import { useState, useEffect } from "react";
import { getComments, patchArticleVotes } from "./utils";
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
    const [viewComments, setViewComments] = useState(false);
    const [articleVotes, setArticleVotes] = useState(votes);
    const [err, setErr] = useState(null);

    const handleArticleLike= (event)=>{
        setArticleVotes((currentVote)=> currentVote + 1)
        event.currentTarget.disabled = true
        patchArticleVotes(article_id, 1)
        .catch((err)=>{
            setArticleVotes((currentVote)=>currentVote - 1);
            setErr("Oops, please try again")
        })
    };

    const handleArticleDislike= (event)=>{
        setArticleVotes((currentVote)=> currentVote - 1)
        event.currentTarget.disabled = true
        patchArticleVotes(article_id, -1)
        .catch((err)=>{
            setArticleVotes((currentVote)=>currentVote + 1);
            setErr("Uh oh, please try again")
        })
};

    const handleCommentsClick= (event)=>{
        setViewComments((viewComments)=>{
            return !viewComments
        })
    };

    useEffect(()=>{
       setIsLoading(true)
       getComments(article_id)
       .then((comment)=>{
            setComments(comment)
            setIsLoading(false)
       })
    }, [article_id])


    return isLoading ? (<h3>Loading...</h3>) :(
        <section className="article">
            <li>
                <h2>{title}</h2>
                <p>By {author}</p>
                <img src={article_img_url} alt={article_id} width='300' height-='auto'/>
                <p>{body}</p>
                <div>
                    <p>The topic of this article is {topic}</p>
                    <button onClick={handleArticleLike}>Like</button>
                    <button onClick={handleArticleDislike}>Dislike</button>
                    {err ? <p>{err}</p> : (
                    <p>Likes: {articleVotes}</p>)}
                    <p>Date: {created_at}</p>
                </div>
            </li>
            <button>Add comment</button>
            <button onClick={handleCommentsClick}>View all comments</button>
            {viewComments ? <CommentsList comments={comments}/> : null}

        </section>
    )
};

export default ArticleIdCard;