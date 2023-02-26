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
      const { id, name, party, images } = obj;
      return (
        <DeclaredSpace
          id={id}
          key={`${name}-${id}`}
          name={name}
          party={party}
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

// import { useState } from 'react'
// import './DeclaredList.css';
// import DeclaredSpace from '../DeclaredSpace/DeclaredSpace'
// import data from '../../declared_data.json'

// function DeclaredList() {
//     const [ query, setQuery ] = useState('')
//     const spaces = data.filter(obj => { 
//       const inTitle = obj.title.includes(query)
//       const inAddress = obj.address.includes(query)
//       return inTitle || inAddress
//     }).map(( obj, i) => {
//       const { name, party, images } = obj;
//       return (
//         <DeclaredSpace
//           id={i}
//           key={name}
//           name={name}
//           party={party}
//           image={images[0]}
//         />
//       )
//     })
//     return (
//       <div className="DeclaredList">
//         <form>
// 				  <input
// 					  value={query}
// 					  placeholder="search"
// 					  onChange={(e) => setQuery(e.target.value)}
// 				  />
// 				  <button type="submit">Submit</button>
// 			  </form>
//         { spaces }
//       </div>
//     )
// } 

// export default DeclaredList