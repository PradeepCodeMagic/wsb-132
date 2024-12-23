import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftSide() {
  return (
    <div>
      <h2 className='text-[30px] font bold text-center  ' >
      
       <Link to={"/dashboard"} > Frank And Oak Dashboard</Link>
        </h2>


     <ul>
        <li>
          <Link to={"/dashboard/product/add"} >Product Add</Link>
         </li>
         <li>
          <Link to={"/dashboard/product/view"} >Product view </Link>
         </li>
        

        <li>Category Add </li>
        <li>Category View </li>
      
     </ul>

    </div>
  )
}
