import { useState } from 'react'
import './PotentialList.css';
import PotentialSpace from '../PotentialSpace/PotentialSpace'
import data from '../../potential_data.js'

function PotentialList() {
    const [ query, setQuery ] = useState('')
    const spaces = data.filter(obj => { 
      const inName = obj.name.toLowerCase().includes(query.toLowerCase())
      const inParty = obj.party.toLowerCase().includes(query.toLowerCase())
      return inName || inParty
    }).map(( obj) => {
      const { id, name, images } = obj;
      return (
        <PotentialSpace
          id={id}
          key={`${name}-${id}`}
          name={name}
          image={images[0]}
        />
      )
    })
    return (
      <div className="PotentialList">
        <form>
				  <input
					  value={query}
					  placeholder="search"
					  onChange={(e) => setQuery(e.target.value)}
				  />
				  <button type="submit">Submit</button>
			  </form>
        { spaces }
      </div>
    )
} 

export default PotentialList