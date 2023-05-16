import { useEffect, useState } from "react";
import { getAllArticles } from "./utils";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";

function ArticlesList() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  useEffect(() => {
    setIsLoading(true);
    getAllArticles({topic, sort_by, order})
    .then((data) => {
      setAllArticles(data);
      setIsLoading(false);
    })
    .catch((err)=>{
        console.log(err);
    })
  }, [topic, sort_by, order, searchParams]);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <section className="commentsContainer">
      {allArticles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} topic={topic}/>;
      })}
    </section>
  );
}
export default ArticlesList;
