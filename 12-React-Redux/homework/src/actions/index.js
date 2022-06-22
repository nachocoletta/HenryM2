import {GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE} from './types';

export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, payload };
}
  
export function getMovies(titulo) {
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=9ff739c7&s=" + titulo)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: GET_MOVIES, payload: json });
        });
    };
}

export function getMovieDetail(id){ 
    return function(dispatch){
        return fetch("http://www.omdbapi.com/?apikey=9ff739c7&i=" + id)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: GET_MOVIE_DETAIL, payload: json });
        });
    } 
    //{type: GET_MOVIE_DETAIL, payload};
} 

export function removeMovieFavorite(payload) {
    return  { type: REMOVE_MOVIE_FAVORITE, payload};
}