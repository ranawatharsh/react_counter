import {useState} from 'react'
import './App.css';

function App() {
  const [counter,setcounter]=useState(0)
  const addvalue=()=>{
    setcounter(counter+1)
  }
  const removalue=()=>{
    if(counter>0){
    setcounter(counter-1)
    }
     
  }
  return (
    <>
    <h1>HI this is a REACT BASED WEBSITE :COUNTER</h1>
    <div className='container'>
    <h2>COUNTER VALUE:{counter}</h2>
    <button onClick={addvalue}>ADD VALUE</button>{" "}
    <button onClick={removalue}>REMOVE VALUE</button>
    </div>
    </>
  );
}

export default App;
