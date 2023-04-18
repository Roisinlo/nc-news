import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import ArticlesList from './components/ArticlesList'
import NavBar from './components/NavBar';
import ArticleById from './components/ArticleById';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar/>
      <Routes>
      <Route path='/' element={<ArticlesList/>}/>
      <Route path='/api/articles/:article_id' element={<ArticleById/>}/>
      </Routes>
    </div>
  );
}

export default App;
