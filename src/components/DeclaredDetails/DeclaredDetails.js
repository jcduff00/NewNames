import React from 'react'
import { useParams } from 'react-router'
import data from '../../declared_data.js'
import './DeclaredDetails.css'

function DeclaredDetails(props) {
  const params = useParams()
  const { id } = params
  const { images, name, party, notable_for, desc, campaign_site } = data[id]

  return (
    <div className="DeclaredDetails">
      <div className="DeclaredDetails-image">
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={name} />
      </div>
      <div className="DeclaredDetails-info">
        <h1 className="DeclaredDetails-name">{ name }</h1>
        <p className="DeclaredDetails-party">{ party }</p>
        <p className="DeclaredDetails_notable_for">{ notable_for }</p>
        <p className="DeclaredDetails-desc">{ desc }</p>
        <p className="DeclaredDetails-desc">{ campaign_site }</p>
      </div>

    </div>
  )
}

export default DeclaredDetails