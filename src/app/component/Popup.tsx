import React from 'react'
import Image from 'next/image';
// const img=require("../asset/pexels.png")
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
function Topcard(props:any) {
    // "title":feed.title,"desc":feed.description,"pubDate":feed.pubDate
    const desc =props.props.desc
    const title=props.props.title
    const pubdate=props.props.pubDate
    const source=props.props.source
    console.log(desc,"desc")
   
  return (
  
         <AlertDialog>
         <div  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           
  <AlertDialogTrigger >Read More</AlertDialogTrigger>
  <AlertDialogContent className='bg-gradient-to-r from-grey-400 to-grey-600' >
    <AlertDialogHeader>
      <AlertDialogTitle ><h1>{title}</h1> <br />
      {pubdate}</AlertDialogTitle>
      <AlertDialogDescription>
       <h2><b>{desc}</b></h2>
      
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className='bg-red-500'>Close</AlertDialogCancel>
      <AlertDialogAction><a href={source} target="_blank">View Source</a></AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent> </div>
</AlertDialog>
  )
}

export default Topcard;