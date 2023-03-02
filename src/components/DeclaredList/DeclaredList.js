import { useState } from 'react'
import './DeclaredList.css';
import DeclaredSpace from '../DeclaredSpace/DeclaredSpace'
import data from '../../declared_data.js'

function DeclaredList() {
    const [ query, setQuery ] = useState('')
    const spaces = data.filter(obj => { 
      const inName = obj.name.toLowerCase().includes(query.toLowerCase())
      const inParty = obj.party.toLowerCase().includes(query.toLowerCase())
      return inName || inParty
        }).map(( obj) => {
          const { id, name, images } = obj;
          return (
            <DeclaredSpace
              id={id}
              key={`${name}-${id}`}
              name={name}
              image={images[0]}
            />
          )
        })
    return (
      <div className="DeclaredList">
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

export default DeclaredList