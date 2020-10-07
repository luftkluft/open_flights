import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size:25px;
  img {
    margin-right: 10px;
    height: 60px;
    width: 60px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
    margin-bottom: -8px;
  }
`

const UserReviewCount = styled.div`
  font-size: 18px;
  padding:10px 0;
`

const ScoreOutOf = styled.div`
  padding-top: 12px;
  font-size: 18px;
  font-weight: bold;
`

const Header = (props) => {
  const name = props.attributes.attributes.name
  const image_url = props.attributes.attributes.image_url
  const avg_score = props.attributes.attributes.avg_score
  const reviewCount = props.reviews.length
  return (
    <Wrapper>
      <h1><img src={image_url} height="50" width="50" alt={name} /> {name}</h1>
      <div>
      <UserReviewCount><span className="review-count">{reviewCount}</span> user reviews</UserReviewCount>
        <Rating score={avg_score} />
        <ScoreOutOf> {avg_score} stars of 5</ScoreOutOf>
      </div>
    </Wrapper>
  )
}

export default Header
