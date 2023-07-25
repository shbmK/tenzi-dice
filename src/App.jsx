import { useEffect, useState } from 'react'
import Die from './components/Die'
import './App.css'

function App() {
  const [dieEl,setDieEl]=useState(diceElem())
  const [tenzies,setTenzies]=useState(false)
  function diceElem(){
    const ar=[]
    let id=1
    for(let i=0;i<10;i++){
      ar.push({
        value:Math.ceil(Math.random()*6),
        held:false,
        id:id
      })
      id++
    }
    return ar
  }
  function dieId(id){
    setDieEl(prev=>prev.map(die=>{
      return die.id==id?{...die,held:!die.held}:die
    }))
  }
  useEffect(function(){
    const held=dieEl.every(die=>die.held)
    const firstval=dieEl[0].value
    const eqval=dieEl.every(die=>firstval===die.value)
    if (held&&eqval){
      setTenzies(true)
      alert("Won")
    }
  },[dieEl])
  let dicearr=dieEl.map(val=><Die value={val.value} held={val.held} dieId={()=>dieId(val.id)}/>)
  const rolldice=()=>setDieEl(prev=>prev.map(die=>{
    return die.held?die:{...die,value:Math.ceil(Math.random()*6)}
  }))
  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.
      </p>
      <div className="die-container">
        {dicearr} 
      </div>
        <button className="roll-dice" onClick={rolldice}>Roll</button>     
    </main>
  )
}

export default App
