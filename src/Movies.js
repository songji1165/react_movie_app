import React from "react";
import PropTypes from "prop-types";
import "./Movies.css"

//state를 사용하지 않는 경우 class component를 쓰지 않아도 된다.
function Movie ( {id, year, title, summary, poster, genres} ){
    return <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <h3 className="movie_title" style={{background:"skyblue"}}>{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="genres">
{genres.map((genre, index) => (<li className="genres_genre" key={index}>{genre}</li>))}
        </ul>
        <p className="movie_summary">{summary.slice(0,180)}...</p>
        
    </div>
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;