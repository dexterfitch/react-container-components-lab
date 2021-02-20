import React from 'react'
import MovieReview from './MovieReview'

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map(review => 
      <MovieReview 
        key={review.article} 
        title={ review.title } 
        rating={ review.rating } 
        pick={ review.pick } 
        description={ review.description } 
        date={ review.date } 
        poster={ review.poster } 
        article={ review.article } 
      />
    )}
  </div>
)

export default MovieReviews