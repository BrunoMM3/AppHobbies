import React, { useEffect, useState } from 'react'
import HobbiesList from './Components/HobbiesList'

import {hobbies as data} from './data/hobbies'
import HobbiesForm from './Components/HobbiesForm'

function App() {

  const [hobbies, setHobbies] = useState([])

    useEffect(() => {
      setHobbies(data)
    }, [])

    function createHobby(hobby){
      setHobbies([...hobbies,hobby])
    }

  return (
    <div>
      <HobbiesForm createHobby={createHobby} />
      <HobbiesList hobbies={hobbies}/>
    </div>
  )
}

export default App