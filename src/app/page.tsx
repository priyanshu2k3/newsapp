"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import Landing from "./Landing/page";

export default function Home() {
  const [fetchResponse,setFetchResponse]=useState([])
  const getData = async () => {
    try {
      
      const response= await axios.get('/api/hello');
      console.log(response.data.results,"main")
      if(!response){alert("some error occured")}
      setFetchResponse(response.data.results)
      return response
    }
    catch (error) {
        console.log(error,"error occured")
      }}
useEffect(() => {
  getData();
}, [0]);
  return (
    <main className="">
     <Landing props={fetchResponse}/>
    </main>
  );
}
