"use client"

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counter/CounterSlice";

export default function Home() {
  const pradeepCounter=useSelector((state)=>state.WsCounter.value)
  const dispatch=useDispatch()

  return (
    <>
      <div className="w-[600px] mx-auto  flex mt-[50px] ">
        <button onClick={()=>dispatch(decrement())} type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">-</button>

        <h1 className=" text-[25px] mx-[10px] " > {pradeepCounter} </h1>

        <button  onClick={()=>dispatch(increment())} type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">+</button>
      </div>
    </>
  );
}
