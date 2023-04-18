function SingleArticle (article){
    return(
        <section>
            <h4>{article.article.title}</h4>
            <h5>By {article.article.author}</h5>
            <img src={article.article.article_img_url} alt={article.article.title} width='300' height-='auto'></img>
            <h5>Topic: {article.article.topic}</h5>
            <p>Comments: {article.article.comment_count}</p>
            <p>Votes: {article.article.votes}</p>
        </section>
    )
};

export default SingleArticle;