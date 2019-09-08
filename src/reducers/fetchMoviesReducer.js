import {TOP_5_MOVIES} from '../actions/types';

const initialState = {
    movies : [],
}

export default function(state = initialState, action){ 
    switch (action.type) {
        case TOP_5_MOVIES:
            return {
                ...state,
                movies: action,
            }
        default: 
            return state
    }
}
