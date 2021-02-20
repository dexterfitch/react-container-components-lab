import React from 'react'

const MovieReview = ({ title, rating, pick, description, date, poster, article }) => (
  <div className="review" style={{ maxWidth: "440px" }}>
    <h3 style={{ marginBottom: 0 }}>{ title }</h3>
    <p style={{ marginTop: 0 }}><small>(Rated: { rating })</small></p>
    <a href={ article }>
      <img style={{ width: "440px", height: "293px" }} src={ poster } alt={ title } />
    </a>
    <p>{ description } (Open: { date })</p>
    <p><small>Critic's Pick: { pick }</small></p>
    <hr />
  </div>
)

export default MovieReview