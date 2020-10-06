import React from 'react'
import Rating from '../Rating/Rating'

const Header = () => {
  return (
    <div>
      <h1>Airline image</h1>
      <div>
        <h3> user reviews count: 555</h3>
        <Rating />
        <h3> 3 of 5 stars</h3>
      </div>
    </div>
  )
}

export default Header
