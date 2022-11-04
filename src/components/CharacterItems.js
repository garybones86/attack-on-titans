import React from 'react'


const CharacterItem = ({ item }) => {

  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
           <img src={item.image} alt='' className='Aot-img'/>
          
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>abilities:</strong> {item.abilities}
            </li>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
            <li>
              <strong>allegiance:</strong> {item.allegiance}
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem