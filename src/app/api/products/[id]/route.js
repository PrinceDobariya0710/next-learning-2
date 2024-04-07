import { NextResponse } from "next/server";

export const GET = async (req,context) => {
    console.log(req)
    return NextResponse.json(
        {"msg":`Product : ${context.params.id}`},
        {status: 200 }
    )
}
// export const GET = async (req,{params}) => {
//     console.log(req)
//     return NextResponse.json(
//         {"msg":`Product : ${context.params.id}`},
//         {status: 200 }
//     )
// }