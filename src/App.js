import React from 'react';
import axios from 'axios';

import Movies from './Movies';
import "./App.css";

class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  }

  getMovies = async() => {
   const {
     data : {
       data : {movies}
    }} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by_rating");
   this.setState({ movies , isLoading : false});
  }

  componentDidMount () {
    this.getMovies();
  }

   render () {
     const { isLoading, movies } = this.state;
   return (
     <section className="container">
      {isLoading ? 
        <div className="loader">
          <span className="loader_text">Loading..</span>
        </div>
      : 
        <div className="movies">
        {movies.map((movie) => {
          let {id, year, title, summary, medium_cover_image, genres} = movie;
          return <Movies 
              key={id}
              id={id}
              year={year}
              title={title}
              summary={summary}
              poster={medium_cover_image}
              genres={genres}
            />
        })}
        </div>
   }
     </section>
   );
 } 

}

export default App;
