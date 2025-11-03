import React , {useState}from 'react'

function Statehandling() {

    const[counter , setCounter] = useState(20);

    function increasesvalue(){
        // alert  ("hey");
        setCounter (counter+10);
    }
  return (
    <div>Statehandling
        <h2>
            Counter Value = {counter}
        </h2>
        <button onClick={increasesvalue}> Increased Value </button>
        <button onClick={()=>setCounter(counter-20)}>Decrese Value</button>
    </div>
  )
}

export default Statehandling