
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import ArticlesList from "./components/ArticlesList";
import NavBar from "./components/NavBar";
import ArticleById from "./components/ArticleById";
import PostComment from "./components/PostComment";

function App() {
  return (
    <section>
      <Header />
      <NavBar />
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<ArticleById />} />
        <Route path="/articles/:article_id/comment" element={<PostComment/>} />
      </Routes>
    </div>
    </section>
  );
}

export default App;
