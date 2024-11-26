import React from 'react'

function HobbyCar({hobby}) {
  return (
    <div key={hobby.id}>
        <h1>{hobby.title}</h1>
        <p>{hobby.description}</p>
        <button>Eliminar</button>
    </div>
  )
}

export default HobbyCar