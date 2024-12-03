import { useState } from "react"


export default function App() {

    // let count=0
    let [ count,setCount ]=useState(0)

    let addFn=()=>{
      setCount(count+1)
    }

  return (
    <div>
        <h1> {count} </h1>
        <button onClick={addFn} > + </button>
        <button onClick={()=>setCount(count-1)} >-</button>
    </div>
  )
}
