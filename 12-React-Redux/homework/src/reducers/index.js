import {GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE} from '../actions/types';

const initialState = {
    moviesFavourites: [], // todos estos estados van a ser importados con el connect en uno o mas componentes
    moviesLoaded: [],
    movieDetail: {}
  };


export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_MOVIES: 
            return {
                ...state,
                moviesLoaded: action.payload.Search
            };
        case ADD_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.concat(action.payload)
            };
        case GET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: action.payload
            };
        case REMOVE_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter( (movie) => movie !== action.payload )
            }; // le faltan cosas a esta funcion
        default:
            return state;
           

    }
}

//   getMovies, getMovieDetail, removeMovieFavorite,addMovieFavorite