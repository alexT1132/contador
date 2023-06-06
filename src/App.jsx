import { useState } from "react";

function App(){
  //let counter = 0;
const [counter, setCounter]= useState(0)
  return (
    <div>
      <h3> Counter</h3>
      <hr />
      <h1> {counter}</h1>


      <hr></hr>
      <button 
      onClick={() => {
        setCounter(counter + 1);
        console.log(counter)
      }}
      type="button" className="btn btn-primary">+1</button>

      <hr></hr>

<button 
      onClick={() => {
        setCounter(counter - 1);
        console.log(counter)
      }}
      type="button" className="btn btn-success">-1</button>

<hr></hr>

<button 
      onClick={() => {
        setCounter(counter - counter);
        console.log(counter)
      }}
      type="button" className="btn btn-danger">Reestablecer</button>


    </div>
  )
}

export default App