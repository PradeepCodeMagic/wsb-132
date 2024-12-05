
import axios from 'axios';
import './App.css'
import { Card } from "flowbite-react";
import { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

function App() {
  const [mData, setMdata] = useState([])
  const [loading, setLoading] = useState(false)

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;


  let showData = () => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${currentPage}`)
      .then((ress) => {
        setMdata(ress.data.results)
        setLoading(true)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }


  useEffect(() => {
    showData()

  }, [currentPage])




  return (
    <>
      <h1 className='text-[25px] text-center ' >Movie App</h1>
      <div className=''>
        <input type='text' className='p-[10px] w-[60%] mt-[10px]  ' placeholder='enter movie name' />

        <div className='max-w-[1200px] mx-auto grid grid-cols-4 mt-[20px] gap-[10px] '>

          {loading == false ?
            <>
              <Mloading />
              <Mloading />
              <Mloading />
              <Mloading />
              <Mloading />
              <Mloading />
              <Mloading />
              <Mloading />

            </>
            :
            mData.map((v) => {
              return (
                <>
                  <Mcard data={v} />
                </>
              )
            })
          }


        </div>
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  )
}

export default App


let Mcard = ({ data }) => {
  console.log(data)
  return (
    <Card
      className=""
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={`https://image.tmdb.org/t/p/w1280/${data.poster_path}`}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {data.original_title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  )
}


const Mloading = () => {
  return (
    <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-slate-700 h-10 w-10"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-slate-700 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-700 rounded col-span-2"></div>
              <div class="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}