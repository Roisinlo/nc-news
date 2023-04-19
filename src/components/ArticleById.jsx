import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleArticle } from "./utils";
import ArticleIdCard from "./ArticleIdCard";

function ArticleById(){
    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        setIsLoading(true)
        getSingleArticle(article_id)
        .then((article)=>{
            setArticle(article)
            setIsLoading(false)
        })
    }, [])
    
    return isLoading ? (<h3>Loading...</h3>) : (
        <section>
            {article.map((article) => {
                return <ArticleIdCard key={article.article_id} {...article}/>
            })}
        </section>
        
    )
};

export default ArticleById;