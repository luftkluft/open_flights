import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
  margin-right: 12px;
`

const Title = styled.div`
  padding: 20px 0px 0px 0px;
  font-family: 'Poppins-Bold';
  font-size: 18px;
`

const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`
const Options = styled.div`
position:absolute;
right :15px;
top: 15px;
display: flex;
flex-direction: columns;
`

const Icon = styled.button`
  box-shadow: none;
  border-radius: 4px;
  margin: 0 4px;

  i {
    font-size: 18px;
  }
`

const Author = styled.div`
  font-size: 16px;
  font-family: 'Poppins-Bold';
  margin: 0 8px;
`

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const AvatarWrapper = styled.div`
  width: 25px;
  height: 25px;
  background: green;
  border-radius: 100%;
  margin-right: 12px;
  margin-bottom: -12px;

  svg {
    width: 25px;
    height: 25px;
  }
`

const Review = (props) => {
  const attributes = props.attributes

  return (
    <div>
      <Card>
        <RatingContainer>
          <Rating score={attributes.score} />
        </RatingContainer>
        <Title>
          {attributes.title}
        </Title>
        <Description>
          {attributes.description}
        </Description>
        <Options>
          <Icon onClick={props.handleDestroy.bind(this, props.id)}> <i className="fa fa-trash"></i></Icon>
        </Options>
      </Card>
    </div>
  )
}

export default Review