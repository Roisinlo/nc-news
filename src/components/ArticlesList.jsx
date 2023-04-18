import { useEffect, useState } from 'react';
import { getAllArticles } from "./utils";
import SingleArticle from './SingleArticle'

function ArticlesList(){
    const [allArticles, setAllArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setIsLoading(true)
        getAllArticles()
        .then((articles)=>{
            setAllArticles(articles)
            setIsLoading(false)
        })
    }, [])

    return isLoading ? (<h3>Loading...</h3>) : (
        <section>
            {allArticles.map((article)=>{
                return (
                   <SingleArticle key={article.article_id} article={article}/>
                  )
              })}
        </section>
    )
};
export default ArticlesList;