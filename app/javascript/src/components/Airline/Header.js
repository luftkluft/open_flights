import React from 'react'
import Rating from '../Rating/Rating'

const Header = (props) => {
  const name = props.attributes.attributes.name
  const image_url = props.attributes.attributes.image_url
  const avg_score = props.attributes.attributes.avg_score
  const total = props.reviews.length
  return (
    <div>
      <h1><img src={image_url} height="50" width="50" alt={name} /> {name}</h1>
      <div>
        <h3> user reviews count: {total}</h3>
        <Rating />
        <h3> {avg_score} stars of 5</h3>
      </div>
    </div>
  )
}

export default Header
