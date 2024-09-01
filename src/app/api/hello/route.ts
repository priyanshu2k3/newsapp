import { NextRequest, NextResponse } from "next/server";
import {data} from "@/lib/tmp"


export async function GET(request:NextRequest) {
  
// const data=data;
  return NextResponse.json(data);

}
// export async function PUT(request:NextRequest) {
//   const body = await request.json();

//   console.log("Request :: Body :: ", body);
//   return NextResponse.json({ msg: "hey from the  put route hello server is working fine " });

// }

// export async function POST(request:NextRequest) {
//   const body = await request.json();

//   console.log("Request :: Body :: ", body);
//   return NextResponse.json({ msg: "hey from the post route hello server is working fine " });

// }


// export async function DELETE(request:NextRequest) {
//   const body = await request.json();

//   console.log("Request :: Body :: ", body);
//   return NextResponse.json({ msg: "hey from the delete route hello server is working fine " });

// }