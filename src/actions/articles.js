import { FETCH_ARTICLES } from './types';

let fetchArticles = () => {
    return function (dispatch) {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=7b24286eaad644daa9a4133129e6ed7f')
            .then(res => res.json())
            .then(data => dispatch({
                type : FETCH_ARTICLES,
                payload : data.articles
            }))
    }
}

export default fetchArticles;