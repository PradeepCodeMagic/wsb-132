"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import mtImg from "../../../public/images/af28407c4e814ca4d4b27abb7b650b82.jpg"
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
    const [data,setData]=useState([])
    let displayData=()=>{
        axios.get("https://dummyjson.com/products")
        .then((ress)=>{
            setData(ress.data.products)
        })
        .catch()
    }

    useEffect(()=>{
        displayData()
    },[])
    return (
        <div>
            <div className='w-full  grid grid-cols-[10%_auto] '>
                <div className=''>
                    <h2> Filter </h2>
                </div>

                <div className='grid grid-cols-4'>

                {data.length>
                0 
                ? 
                data.map((v)=>{
                    console.log(v)
                    return(
                        <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg" src= {v.thumbnail}  alt="" />
                            {/* <Image width={200} height={200} src={"https://i.pinimg.com/736x/01/a2/a2/01a2a29bc19a50d2fd8f7f303c77b45e.jpg"}  /> */}
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {v.title} </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <Link href={`/product/${v.category}/${v.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                
                            </Link>
                        </div>
                    </div>
                    )
                }) 
                : 
                ""
                }
                    

                    

                </div>
            </div>
        </div>
    )
}


 
  ////////////////////////////////////////////////////////////////////////

  

  
  

  
  


  
  