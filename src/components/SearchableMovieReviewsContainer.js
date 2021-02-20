import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'L4dnTrzSEHpzjAAydS9gxEN60aAa54Z3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchString: ""
  }

  fetch = (searchString) => {
    fetch(URL + "&query=" + searchString)
    .then(res => res.json())
    .then(data => this.checkData(data))
  }

  checkData(data) {
    if (data.results === null) {
      this.setState ({
        reviews: "No Search Results Found"
      })
    } else {
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
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.fetch(this.state.searchString)
  }

  handleChange = (event) => {
    this.setState({
      searchString: event.target.value
    })
  }

  render() {
    let moviesFound = this.state.movies
    let renderObject

    if (moviesFound === "No Search Results Found") {
      renderObject = <div><h3>{ this.state.movies }</h3><hr /></div>
    } else {
      renderObject = <MovieReviews movies={ this.state.movies } />
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <div className="search-results">
          { renderObject }
        </div>
      </div>
    )
  }
}
