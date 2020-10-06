import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'

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

  if (loaded) {
  return (
    <div>
      {
        <Header
          attributes={airline.data}
          reviews={airline.included}
        />
      }
      <ReviewForm />
    </div>
  )
  }else{
    return (
      <div>
        Airline Loading...
      </div>
    )
  }
}

export default Airline
