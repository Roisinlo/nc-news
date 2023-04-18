import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://be-news-project.onrender.com/api'
});

export const getAllArticles = () => {
    return newsApi
    .get('https://be-news-project.onrender.com/api/articles')
    .then((res)=>{
        return res.data.articles;
    })
};

export const getSingleArticle = (article_id) => {
    return newsApi
    .get(`https://be-news-project.onrender.com/api/articles/${article_id}`)
    .then(({data})=>{
        return data.article;
    })
};