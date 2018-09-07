import { FETCH_ARTICLES } from './types';

let fetchArticles = region => dispatch => {
    let reg = region ? region : 'us';
    let url = `https://newsapi.org/v2/top-headlines?country=${reg}&apiKey=7b24286eaad644daa9a4133129e6ed7f`;
    fetch(url)
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_ARTICLES,
            payload: data.articles
        }))
}
export default fetchArticles;