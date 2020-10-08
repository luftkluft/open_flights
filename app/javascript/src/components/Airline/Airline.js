import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'
import ReviewForm from './ReviewForm'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

const Column = styled.div`
  background: #fff; 
  max-width: 50%;
  width: 50%;
  float: left; 
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &:last-child {
    background: black;
    border-top: 1px solid rgba(255,255,255,0.5);
  }
`
const Main = styled.div`
  padding-left: 60px;
`

const Airline = (props) => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/airlines/${slug}`
    axios.get(url)
      .then(resp => {
        setAirline(resp.data)
        setLoaded(true)
      })
      .catch(resp => console.log(resp))
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    console.log('name:', e.target.name, 'value:', e.target.value)
  }

  if (loaded) {
    return (
      <Wrapper>
        <Column>
          <Main>
            <Header
              attributes={airline.data.attributes}
              reviews={airline.included}
            />
          </Main>
        </Column>
        <Column>
          <ReviewForm
            attributes={airline.data.attributes}
            review={review}
            handleChange={handleChange} />
        </Column>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <h3>Airline Loading...</h3>
      </Wrapper>
    )
  }
}

export default Airline
