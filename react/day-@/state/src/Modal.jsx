import { useState } from "react"


export default function Modal() {

    const [myModal,setMyModal]=useState(false)



   let myFn=()=>{
    setMyModal(!myModal)
   }

  return (
       <>
        <button style={{color:"red",fontSize:"33px"}}  onClick={myFn} > {myModal==true ? "hide" : "show " }  </button>

        {/* <div className={(myModal==true) ? "activeModal" : "myModal" } ></div> */}
        <div className={ `myModal ${myModal==true ? "activeModal" : ""}  `}> 
                <h4 onClick={()=>setMyModal(false)} >X</h4>
         </div>
       </>
  )
}
