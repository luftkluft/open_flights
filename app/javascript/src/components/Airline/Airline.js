import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Airline = (props) => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/airlines/${slug}`
    axios.get(url)
    .then(resp => console.log(resp))
    .catch(resp => console.log(resp))
  }, [])
  return <div>Airlines#show view for app.</div>
}

export default Airline
