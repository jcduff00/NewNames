import React from 'react'
import { useParams } from 'react-router'
import data from '../../potential_data.js'
import './PotentialDetails.css'

function PotentialDetails(props) {
  const params = useParams()
  const { id } = params
  const { images, name, party, notable_for, desc, campaign_site } = data[id]

  return (
    <div className="PotentialDetails">
      <div className="PotentialDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={name} />
      </div>
      <div className="PotentialDetails-info">
        <h1 className="PotentialDetails-name">{ name }</h1>
        <p className="PotentialDetails-party">{ party }</p>
        <p className="PotentialDetails_notable_for">{ notable_for }</p>
        <p className="PotentialDetails-desc">{ desc }</p>
        <p className="PotentialDetails-desc">{ campaign_site }</p>
      </div>

    </div>
  )
}

export default PotentialDetails