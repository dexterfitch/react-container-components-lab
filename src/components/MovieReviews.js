import React from 'react'
import MovieReview from './MovieReview'

const MovieReviews = ({ movies }) => (
  <div className="latest-movie-reviews">
    { movies.map(movie => 
      <MovieReview key={movies.indexOf(movie)} title={ movie.title } rating={ movie.rating } pick={ movie.pick } description={ movie.description } date={ movie.date } poster={ movie.poster } article={ movie.article } />
    )}
  </div>
)

export default MovieReviews