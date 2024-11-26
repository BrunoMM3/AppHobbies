import React from 'react'
import HobbyCar from './HobbyCar'


function HobbiesList({hobbies}) {
    
    

    if(hobbies.length === 0){
      return <h1>No existen pasatiempos dados de alta</h1>
    }

  return (
    <div>
        {
          hobbies.map( hobby => (
            
              <HobbyCar key={hobby.id} hobby={hobby} />
            

          ))
        }  

    </div>
  )
}

export default HobbiesList