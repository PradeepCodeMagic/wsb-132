
import LeftSide from './LeftSide'
import { Outlet } from 'react-router-dom'
import Header from "../src/Comman/Header"

export default function Layout() {
  return (
    <>
      <div className='w-full grid grid-cols-[20%_auto]  '>

        <div className='p-[10px] '> <LeftSide /> </div>
        
        <div className='p-[10px] bg-red-400 '>
          <Header />
          <Outlet />
        </div>

      </div>
    </>
  )
}
