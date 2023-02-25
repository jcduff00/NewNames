import React from 'react'
import { useParams } from 'react-router'
import data from '../../declared_data.json'

function DeclaredDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, name, party, notable_for, desc } = data[id]

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={name} />
      </div>

      <div>
        <h1>{ name }</h1>
        <p>{ party }</p>
        <p>{ notable_for }</p>
        <p>{ desc }</p>
      </div>

    </div>
  )
}

export default DeclaredDetails