import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from '../../actions/index'


export class ConnectedList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
        { this.props.moviesFavourites.map(m => <div key={m.imdbID}> 
                                        <li><Link to={`/movie/${m.imdbID}`}> {m.Title} </Link>
                                            <button onClick={ () => {this.props.removeMovieFavorite(m)}}>💔</button></li>
                                        {/* <li>{m.Title} <button onClick={this.props.addMovieFavorite(m)}>❤</button></li> */}
                                       </div>) }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesFavourites: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

