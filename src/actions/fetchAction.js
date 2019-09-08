import { TOP_5_MOVIES} from './types';
import axios from 'axios';

export const fetchMovies = (dispatch) => {
    axios.get('http://demo9595712.mockable.io/getTopFiveMovies')
    .then(res => 
        dispatch({
        type: TOP_5_MOVIES,
        movies: res.data.components[1].items,
        ordertypes: res.data.components[0].items,
    }))
    .catch(err => console.log(err));
    
} 

export default fetchMovies;