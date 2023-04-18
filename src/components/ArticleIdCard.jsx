function ArticleIdCard ({
    article_id,
    title,
    topic,
    author,
    body,
    created_at,
    votes,
    article_img_url
}){

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
                    <button>Vote</button>
                    <p>Comments: {votes}</p>
                    <p>Date: {created_at}</p>
                </div>
            </li>
            <button>View all comments</button>
            <button>Add comment</button>
        </section>
    )
};

export default ArticleIdCard;