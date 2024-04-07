import { NextResponse } from "next/server";

export async function GET(request){
    const requestHeaders = new Headers(request.headers);
    //Query Params
    console.log("query params");
    const {searchParams} = new URL(request.url);
    console.log(searchParams);
    console.log(searchParams.get("search"));

    const searchParams2 = request.nextUrl.searchParams;
    console.log(searchParams2);

    const cookie = request.cookie;

    return NextResponse.json({'msg':"HEllo World"})
}

export async function POST(req){
    // const res = await req.json(); //this method returns body
    // console.log(res)

    console.log("Form data")
    const formData = await req.formData();
    console.log(formData);
    console.log(formData.get("name"))
    return NextResponse.json({'msg':"HEllo World"})
}