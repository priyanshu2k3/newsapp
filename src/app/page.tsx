"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import Landing from "./Landing/page";
import {Search} from "@/app/component/search"


export default function Home() {
  const [fetchResponse,setFetchResponse]=useState([])
  const [bookmark,setBookmar]=useState([])
  const [serchitem ,setSearchitem]=useState("health")
  var item=<Landing props={fetchResponse}/>
  const getData = async () => {
    try {
      const response:[]= await axios.post("api/hello",{serchitem});                   
      console.log(response,"main")
      if(!response){alert("some error occured")}
      setFetchResponse(response)
      
      return response
    }
    catch (error) {
        console.log(error,"error occured")
      }}
useEffect(() => {
  getData();
}, [0]);

const handelSearch=(e:any)=>{
  e.preventDefault();
  console.log(serchitem)
  getData()
  item =<Landing props={fetchResponse}/>
}
const handelBookMark=(e:any)=>{
  e.preventDefault();
  item =<Landing props={bookmark}/>
  return 
}

  return (
    <main className="">
            <div className="bg-white py-24 sm:py-10">
            <div className="mx-auto max-w-7xl px-4 lg:px-10">
            <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">InformaSphere</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Combines information and sphere, indicating a comprehensive news coverage.
            </p>
          </div>
          {/* serch */}
          </div><form className="flex items-center max-w-lg mx-auto m-2 w-full">   
    <label htmlFor="voice-search" className="sr-only ">Search</label>
    <div className="w-full">
     
        <input onChange={(e:any)=>{setSearchitem(e.target.value)}} value={serchitem }type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the thing you want to Search in health" required />
    </div>
    <button onClick={handelSearch} className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Search
    </button>
    <button onClick={handelBookMark} className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Bookmarked
    </button>
</form></div>
    {item}
    </main>
  );
}
