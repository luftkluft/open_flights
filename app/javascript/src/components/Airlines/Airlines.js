import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Airline from './Airline'

const Home = styled.div`
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/airlines.json')
      .then(resp => {
        setAirlines(resp.data.data)
      })
      .catch(resp => console.log(resp))
  }, [airlines.length])

  const grid = airlines.map(item => {
    return (
      <Airline
        key={item.attributes.name}
        attributes={item.attributes}
      />
    )
  })

  return (
    <Home>
      <div className="header">
        <h1>OpenFlights</h1>
        <div>Airlines reviews.</div>
        <Grid><ul>{grid}</ul></Grid>
      </div>
    </Home>
  )
}

export default Airlines
