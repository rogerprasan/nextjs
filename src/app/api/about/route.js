import { NextResponse } from "next/server"

export async function POST(req){
    const {name} = await req.json()
    console.log(name)
    if (name === "hello"){
        return NextResponse.json({message:"My name is prasanna"}, {status: 200})
    }
    else{
        return NextResponse.json({message:"My name is nothing"}, {status: 200})
    }
}