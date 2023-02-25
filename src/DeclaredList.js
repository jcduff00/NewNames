import React from 'react';
import './DeclaredList.css';
import DeclaredSpace from './DeclaredSpace'
import data from './declared_data.json'

function DeclaredList() {

    const spaces = data.map(( { name, party, images }, i) => {
      return (
        <DeclaredSpace
          id={i}
          key={name}
          name={name}
          party={party}
          image={images[0]}
        />
      )
    })
    return (
      <div className="DeclaredList">
        { spaces }
      </div>
    )
} 

export default DeclaredList