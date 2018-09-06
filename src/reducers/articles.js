import {FETCH_ARTICLES} from '../actions/types';

const initialState = {
    items : []
}
const articles = (state = initialState , action) => {
    switch(action.type){
        case FETCH_ARTICLES : return {
            ...state,
            items : action.payload
        }
        default : return state;
    }
}

export default articles;