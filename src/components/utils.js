import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://be-news-project.onrender.com/api'
});

export const getAllArticles = ({topic, sort_by, order}) => {
    return newsApi
    .get('/articles', { params: {topic, sort_by, order}})
    .then(({data})=>{
        return data.articles;
    })
}


export const getSingleArticle = (article_id) => {
    return newsApi
    .get(`/articles/${article_id}`)
    .then(({data})=>{
        return data.article[0];
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


export const postNewComment = (article_id, body) => {
    return newsApi
    .post(`/articles/${article_id}/comments`, body)
    .then(({data})=>{
        return data.comment;
    })
}

export const getAllTopics = ()=> {
    return newsApi
    .get(`/topics`)
    .then(({data})=>{
        return data;
    })
}