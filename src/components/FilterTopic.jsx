function FilterTopic(){

    useEffect(()=>{
        setIsLoading(true)
        getAllArticles()
        .then((articles)=>{
            setAllArticles(articles)
            setIsLoading(false)
           })
    }, [])

    return isLoading ? (<h3>Loading...</h3>) : (
        <section className="commentsContainer">
            {allArticles.map((article)=>{
                return (
                   <ArticleCard key={article.article_id} article={article}/>
                  )
              })}
        </section>
    )
}
export default FilterTopic;