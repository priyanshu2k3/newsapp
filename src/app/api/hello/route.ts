import { NextRequest, NextResponse } from "next/server";
import {data} from "@/lib/tmp"
import axios from "axios";

export async function POST(request:NextRequest) {
  const {serchitem}=await request.json();
  console.log(serchitem)
  const apikey=process.env.apikey;
  const url="https://newsdata.io/api/1/news?apikey="+apikey+" &q="+serchitem +"&country=in&language=en&category=health";
  try {
    let response= await axios.get(url);                   
    console.log(response.data.results,"main")
    return NextResponse.json(response.data.results);
  }
  catch (error) {
      console.log(error,"error occured")
      return NextResponse.json(error);
    }
  }