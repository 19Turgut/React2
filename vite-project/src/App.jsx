import { useState } from 'react'
import './App.css'
import Email from './componenet/Email'
import Name from './componenet/name'
import Adresss from './componenet/adresss'
import PersonalInfo from './componenet/PersonalInfo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Email 
    text="turqutbagirli917@gmail.com"
    />
    <Name
    text="Turqut Bagirli"
    />
    <Adresss
    text="Azerbaijan/Naxcivan/Shahbuz"
    />
    <PersonalInfo
    phone="0506941206"
    />
    </>
  )
}

export default App
