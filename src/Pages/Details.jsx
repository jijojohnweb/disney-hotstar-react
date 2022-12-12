
import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {country,name,id} = useParams();
  return (
    <div>Details

        <h1>{country +" "+ name +" "+ id}</h1>
    </div>
  )
}

export default Details