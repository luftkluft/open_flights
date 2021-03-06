import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'

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
      .catch(resp => console.log('Error', resp))
  }, [loaded])

  const handleChange = (e) => {
    e.preventDefault()
    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }))
  }

  // create review
  const handleSubmit = (e) => {
    setLoaded(false)
    e.preventDefault()
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    const airline_id = airline.data.id
    axios.post('/api/v1/reviews', { review, airline_id })
      .then(resp => {
        const included = [...airline.included, resp.data]
        setAirline([...airline, included])
        setReview({ title: '', description: '', score: 0 })
        setLoaded(true)
      })
      .catch(resp => { })
  }

  // set score
  const setRating = (score, e) => {
    e.preventDefault()
    setReview({ ...review, score })
  }

  // destroy review
  const handleDestroy = (id, e) => {
    setLoaded(false)
    e.preventDefault()
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    axios.delete(`/api/v1/reviews/${id}`)
      .then((resp) => {
        setLoaded(true)
      })
      .catch(resp => { })
  }

  let airlineReviews
  if (airline.included && airline.included.length > 0) {
    airlineReviews = airline.included.map((review, index) => {
      return (
        <Review
          key={index}
          id={review.id}
          attributes={review.attributes}
          handleDestroy={handleDestroy}
        />
      )
    })
  }

  if (!loaded) {
    return (
      <Wrapper>
        <h3>Airline Loading...</h3>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Column>
        <Main>
          <Header
            attributes={airline.data.attributes}
            reviews={airline.included}
          />
          {airlineReviews}
        </Main>
      </Column>
      <Column>
        <ReviewForm
          attributes={airline.data.attributes}
          review={review}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setRating={setRating}
        />
      </Column>
    </Wrapper>
  )
}

export default Airline
