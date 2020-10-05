import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/airlines.json')
    .then(resp => console.log(resp))
    .catch(resp => console.log(resp))
  }, [airlines.length])
  return <div>Airlines#index view for app.</div>
}

export default Airlines
