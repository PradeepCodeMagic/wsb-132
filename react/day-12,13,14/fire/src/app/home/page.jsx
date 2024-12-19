
"use client"
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, set, onValue } from "firebase/database";

import { v4 as uuidv4 } from 'uuid';
import { app } from "../FireConfig"


export default function page() {

  let dbForm = (e) => {
    const db = getDatabase(app);
    e.preventDefault()

    let userObj = {
      f_name: e.target.floating_first_name.value,
      l_name: e.target.floating_last_name.value,
      father_name: e.target.Father_name.value,
      mother_name: e.target.Mother_name.value,
      dob: e.target.Dob.value,
      contact: e.target.floating_phone.value,
      email: e.target.floating_Email.value,
    }
    let UserId = uuidv4()

    set(ref(db, 'BCA/' + "1st/" + UserId), userObj)

    alert("done")
    Dp()
  }


  const [tData,setTData]=useState([])
  let Dp = () => {
    const db = getDatabase(app);

    const starCountRef = ref(db, "BCA/" + "1st/");

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      // let myData=Object.values(data)

      // let myArr = [11,22,33,44,55,66,777,88]
      // for(let v in myArr){
      //   console.log(myArr[v])
      // }


      let myArr=[]
      for (let a in data) {
        // myArr.push(data[a] )
        // console.log(data[a])
        let newObj = {
          id: a,
          f_name:data[a].f_name ,
          l_name:data[a].l_name,
          father_name:data[a].father_name ,
          mother_name:data[a].mother_name ,
          dob:data[a].dob ,
          contact:data[a].contact ,
          email:data[a].email ,
        }

        myArr.push(newObj)
      }

      setTData(myArr)


      // updateStarCount(postElement, data);
    });
  }

  useEffect(() => {
    Dp()
  }, [])

  return (
    <div>

      <form class="max-w-md mx-auto mt-[50px] " onSubmit={dbForm} >
        <div class="relative z-0 w-full mb-5 group">
          <input type="text" name="Father_name" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

          <label for="" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Father Name </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input type="text" name="Mother_name" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mother Name</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input type="date" name="Dob" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Dob </label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_Email" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_Email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
          </div>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>


      <div className='mt-[50px] p-[10px] '>


        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Sr.
                </th>
                <th scope="col" class="px-6 py-3">
                  Father name
                </th>
                <th scope="col" class="px-6 py-3">
                  Mother Name
                </th>
                <th scope="col" class="px-6 py-3">
                  DOB
                </th>

                <th scope="col" class="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Contact
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>

            {tData.length>0
             ?
             tData.map((v,i)=>{

              {/* id: a,
          f_name:data[a].f_name ,
          l_name:data[a].l_name,
          father_name:data[a].father_name ,
          mother_name:data[a].mother_name ,
          dob:data[a].dob ,
          contact:data[a].contact ,
          email:data[a].email , */}
              return(
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {i+1}
                </th>
                <td class="px-6 py-4">
                  {v.father_name}
                </td>
                <td class="px-6 py-4">
                  {v.mother_name}
                </td>
                <td class="px-6 py-4">
                  {v.dob}
                </td>
                <td class="px-6 py-4">
                  {v.f_name} {v.l_name}
                </td>
                <td class="px-6 py-4">
                  {v.contact}
                </td>
                <td class="px-6 py-4">
                 {v.email}
                </td>
              </tr>
              )
             })
               : 
               "No Data Found !!"
               }
              

            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}




