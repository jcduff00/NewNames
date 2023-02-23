import React from 'react';
import './DeclaredList.css';
import DeclaredSpace from './DeclaredSpace'
import data from './declared_data.json'

function DeclaredList() {

    const spaces = data.map((obj) => {
        const { name, party, images } = obj
      return (
        <DeclaredSpace
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

// 
// function DeclaredList() {
//     return (
//       <div className="DeclaredList">
//         <DeclaredSpace 
//             name="Marianne Williamson"
//             party="Democratic"
//             image="Marianne_Williamson.jpg"
//             />
//         <DeclaredSpace 
//             name="Nikki Haley"
//             party="Republican"
//             image="Nikki_Haley.jpg"/>
//         <DeclaredSpace 
//             name="Vivek Ramaswamy"
//             party="Republican"
//             image="Vivek.jpg"/>
//       </div>
//     )
// }
  

export default DeclaredList