
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import ArticlesList from "./components/ArticlesList";
import NavBar from "./components/NavBar";
import Article from "./components/Article";
import { useEffect, useState } from "react";
import { getAllTopics } from "./components/utils";

function App() {
  const [topics, setTopics]= useState(null);
  const [isLoading, setIsLoading]= useState(false)

  useEffect(()=>{
    setIsLoading(true);
    getAllTopics()
    .then((data)=>{
      setIsLoading(false);
      setTopics(data.topics);
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])

  return (
    <section>
      <Header />
      <NavBar topics={topics}/>
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticlesList topics={topics}/>} />
        <Route path="/articles" element={<ArticlesList topics={topics}/>} />
        <Route path="/articles/:article_id" element={<Article/>} />
        <Route path="/articles/:topic" element={<ArticlesList/>} />
      </Routes>
    </div>
    </section>
  );
}

export default App;
