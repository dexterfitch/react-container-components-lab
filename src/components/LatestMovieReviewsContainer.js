import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'L4dnTrzSEHpzjAAydS9gxEN60aAa54Z3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  fetch = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data =>
      this.setState({
        reviews: data.results.map(
          movie => ({
            title: movie.display_title,
            rating: movie.mpaa_rating === "" ? "Unrated" : movie.mpaa_rating,
            pick: movie.critics_pick === 0 ? "No" : "Yes",
            description: movie.summary_short,
            date: movie.opening_date === null ? "N/A" : movie.opening_date,
            poster: movie.multimedia === null ? "https://via.placeholder.com/440x293" : movie.multimedia.src,
            article: movie.link.url
          })
        )
      })
    )
  }

  UNSAFE_componentWillMount() {
    this.fetch()
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={ this.state.reviews }/>
      </div>
    )
  }
}












