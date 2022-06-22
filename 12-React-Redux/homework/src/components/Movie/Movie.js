import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';


import './Movie.css';

class Movie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          title: ""
        };
    }
    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.id);
    };

    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula  
                <h2>Titulo: {this.props.movies.Title}</h2>
                <h3>Year: {this.props.movies.Year}</h3>
                <h3>Poster: <img src={this.props.movies.Poster} alt="" /></h3>
            </div>
        );
    }
}

    // "Search": [
    //     {
    //         "Title": "Rocky",
    //         "Year": "1976",
    //         "imdbID": "tt0075148",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNTBkMjg2MjYtYTZjOS00ODQ0LTg0MDEtM2FiNmJmOGU1NGEwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
    //     },
        
    // "totalResults": "266",
    // "Response": "True"

// <h2>{city.name}</h2>
//                     <div className="info">
//                         <div>Temperatura: {city.temp} ºC</div>
//                         <div>Clima: {city.weather}</div>
//                         <div>Viento: {city.wind} km/h</div>
//                         <div>Cantidad de nubes: {city.clouds}</div>
//                         <div>Latitud: {city.latitud}º</div>
//                         <div>Longitud: {city.longitud}º</div>
//                     </div>

const mapStateToProps = (state) => {return { movies: state.movieDetail}}


export default connect(
    mapStateToProps,
    {getMovieDetail}
  )(Movie);
