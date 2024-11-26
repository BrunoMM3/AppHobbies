import React, { useState } from 'react'
import { hobbies } from '../data/hobbies'

function HobbiesForm({createHobby}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    

    const enviar = (e) => {
        e.preventDefault()
        const newHobby = {
            id: hobbies.length,
            title,
            description
        }
        createHobby(newHobby)
        setTitle('')
        setDescription('')
    }

  return (
    <form onSubmit={enviar}>
        <input type="text" 
        
        placeholder='Introduce tu pasatiempo favorito'
        onChange={e => setTitle(e.target.value)}
        value={title}
        autoFocus
         />
         <textarea type="text" 
        placeholder='Introduce la descripcion'
        onChange={e => setDescription(e.target.value)}
         />
         <button
         className='btn btn-primary'
         >Guardar</button>
    </form>
  )
}

export default HobbiesForm