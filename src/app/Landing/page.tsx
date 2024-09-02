"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import Topcard from "@/app/component/Popup"


export default function Landing(props:any) {
  const arr=props.props.data ||[]
  console.log(arr,"in the landing page",props)
  const handleSave=()=>{

  }

if(arr !="undefined" && !arr[0]){
  return (

      <div className="bg-white py-24 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-10">
          
          <div className="mx-auto border-t border-grey-200  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-2 sm:mt-2 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {arr.map((feed:any) => (
              <article key={feed.article_id} className="flex max-w-xl flex-col items-start justify-between border-2 border-grey-500 p-10">
                <div className="flex items-center gap-x-4 text-xs">
                  <div onClick={handleSave}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg></div>
                  <time dateTime={feed.pubDate} className="text-gray-500">
                    {feed.pubDate}
                  </time>
                  <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {feed.category[0]}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a >
                      <span className="absolute inset-0" />
                      {feed.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{feed.description} </p>
                  
               
                </div>
                <Topcard props={{"title":feed.title,"desc":feed.description,"pubDate":feed.pubDate,source:feed.link}}/>
              </article>
            ))}
          </div>
        </div>
      </div>
  
);
} else{return(<></>)}
}
