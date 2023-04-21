import { useEffect, useState } from 'react';
import { getAllArticles } from "./utils";
import ArticleCard from './ArticleCard';
import { useParams } from 'react-router-dom';

function ArticlesList(){
    const {topic} = useParams();
    const [allArticles, setAllArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setIsLoading(true)
        getAllArticles(topic)
        .then((articles)=>{
            setAllArticles(articles)
            setIsLoading(false)
        })
    }, [topic])

    return isLoading ? (<h3>Loading...</h3>) : (
        <section className="commentsContainer">
            {allArticles.map((article)=>{
                return (
                   <ArticleCard key={article.article_id} article={article}/>
                  )
              })}
        </section>
    )
};
export default ArticlesList;