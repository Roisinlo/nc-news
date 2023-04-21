import { Link } from "react-router-dom"

function ArticleCard ({article}){

    return(
        <section className="article">
            <h4><Link to={`/articles/${article.article_id}`}>{article.title}</Link></h4>
            <h5>By {article.author}</h5>
            <img src={article.article_img_url} alt={article.title} width='300' height-='auto'></img>
            <h5>Topic: {article.topic}</h5>
            <p>Comments: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
        </section>
    )
};

export default ArticleCard;