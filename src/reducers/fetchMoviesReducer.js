import {TOP_5_MOVIES} from '../actions/types';

const initialState = {
    movies : [],
    movie: [],
    loading : false
}

export default function(state = initialState, action){ 
    switch (action.type) {
        case TOP_5_MOVIES:
            return {
                ...state,
                movies: action,
                loading: false
            }
        default: 
            return state
    }
}
