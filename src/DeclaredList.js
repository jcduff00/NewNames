import React from 'react';
import './DeclaredList.css';
import DeclaredSpace from './DeclaredSpace'


function DeclaredList() {
    return (
      <div className="DeclaredList">
        <DeclaredSpace 
            name="Marianne Williamson"
            party="Democratic"
            image="Marianne_Williamson.jpg"
            />
        <DeclaredSpace 
            name="Nikki Haley"
            party="Republican"
            image="Nikki_Haley.jpg"/>
        <DeclaredSpace 
            name="Vivek Ramaswamy"
            party="Republican"
            image="Vivek.jpg"/>
      </div>
    )
}
  

export default DeclaredList