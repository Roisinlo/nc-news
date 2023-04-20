import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://be-news-project.onrender.com/api'
});

export const getAllArticles = () => {
    return newsApi
    .get('/articles')
    .then((res)=>{
        return res.data.articles;
    })
};

export const getSingleArticle = (article_id) => {
    return newsApi
    .get(`/articles/${article_id}`)
    .then(({data})=>{
        return data.article;
    })
};

export const getComments = (article_id) =>{
    return newsApi
    .get(`/articles/${article_id}/comments`)
    .then(({data})=>{
        return data.comments;
    })
}

export const patchArticleVotes = (article_id, vote) => {
    return newsApi
    .patch(`/articles/${article_id}`, {inc_votes: vote})
    .then(({data})=>{
        return data;
    })
}


export const postNewComment = (article_id) => {
    return axios.post(`/articles/${article_id}/comments`)
    .then(({data})=>{
        console.log(data)
        return data;
    })
}