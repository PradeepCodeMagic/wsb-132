
import { MdDelete } from 'react-icons/md'
import './App.css'
import { useState } from 'react'

function App() {
  const [inputValue,setInputValue]=useState(null)
  const [allLi,setAllLi]=useState([])

  let getValue=()=>{
    setAllLi([...allLi,inputValue])
    setInputValue("")
  }


  return (
    <>
      <div className='main'>
        <h2> Todo App </h2>

        <div className='row-1'>
          <input type='text' onChange={(e)=>setInputValue(e.target.value)}  value={inputValue} />
          <button onClick={getValue} > Add </button>
        </div>

        <div className='row-2'>
            <ul>
            {allLi.map((v,i)=>{
              return(
                <>
                <MyLi data={v} index={i} allLi={allLi} setAllLi={setAllLi} />
                </>
              )
            })}
                

            </ul>
        </div>

      </div>
    </>
  )
}

export default App


let MyLi=({data,index,allLi,setAllLi})=>{

  let deleteLi=()=>{
    let finalData=allLi.filter((v,i)=>index!=i)

    setAllLi(finalData)
  }


  const [done,setDone]=useState(false)

  let doneLi=()=>{
    setDone(!done)
  }
  return(
    <>
      <li onClick={doneLi} className={done ? "activeLi" : "" }  >{index+1} {data}  <MdDelete className='deleteIcon' onClick={deleteLi} />  </li>
    </>
  )
}
