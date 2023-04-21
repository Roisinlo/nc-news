import { useState, useEffect } from "react";
import { getComments, patchArticleVotes, getSingleArticle } from "./utils";
import CommentsList from "./CommentList";
import PostComment from "./PostComment";
import { useParams } from "react-router-dom";

function Article (){
    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [viewComments, setViewComments] = useState(false);
    const [articleVotes, setArticleVotes] = useState(0);
    const [err, setErr] = useState(null);
    const [liked, setLiked] = useState(false);
    const [addComment, setAddComment] = useState(false);

    useEffect(()=>{
        setIsLoading(true)
        Promise.all([getSingleArticle(article_id),
        getComments(article_id)])
        .then((data)=>{
             setComments(data[1])
             setArticle(data[0])
             setIsLoading(false)
        })
     }, [article_id])

    const handleArticleLike= (event)=>{
        setLiked(true);
        setArticleVotes((currentVote)=> currentVote + 1)
        patchArticleVotes(article_id, 1)
        .catch((err)=>{
            setArticleVotes((currentVote)=>currentVote - 1);
            setErr("Oops, please try again")
        })
    };

    const handleArticleDislike= (event)=>{
        setLiked(false);
        setArticleVotes((currentVote)=> currentVote - 1)
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

    const handleAddComment= (event)=>{
        setAddComment((addComment)=>{
            return !addComment
        })
    };

    return isLoading ? (<h3>Loading...</h3>) :(
        <section className="article">
            <li>
                <h2>{article.title}</h2>
                <p>By {article.author}</p>
                <img src={article.article_img_url} alt={article_id} width='300' height-='auto'/>
                <p>{article.body}</p>
                <div>
                    <p>Topic: {article.topic}</p>
                    
                    {!liked ? <button className="buttons" onClick={handleArticleLike}>Like</button> : null}
                    {liked ? <button className="buttons" onClick={handleArticleDislike}>Dislike</button> : null}
                    {err ? <p>{err}</p> : (
                    <p>Likes: {articleVotes}</p>)}
                    <p>Date: {article.created_at}</p>
                </div>
            </li>
            <button className="buttons" onClick={handleAddComment}>Add comment</button>
            {addComment ? <PostComment article_id={article.article_id} setComments={setComments}/> : null}

            <button className="buttons" onClick={handleCommentsClick}>View all comments</button>
            {viewComments ? <CommentsList comments={comments}/> : null}

        </section>
    )
};

export default Article;