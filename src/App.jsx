import { useState } from 'react'
import Die from './components/Die'
import './App.css'

function App() {
  const [dieEl,setDieEl]=useState(diceElem())
  function diceElem(){
    const ar=[]
    for(let i=0;i<10;i++){
      ar.push(Math.ceil(Math.random()*6))
    }
    return ar
  }
  let dicearr=dieEl.map(val=><Die value={val}/>)
  const rolldice=()=>setDieEl(diceElem())
  return (
    <main>
      <div className="die-container">
        {dicearr} 
      </div>
        <button className="roll-dice" onClick={rolldice}>Roll</button>     
    </main>
  )
}

export default App
