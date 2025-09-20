import { getDataFromToken } from "@/helpers/getDataFromToken";
import { connectToDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModels"
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){
    try {
        await connectToDB();
        const userId=getDataFromToken(request);
        
        const user=await User.findById(userId).select("-password");
        if(!user){
            return NextResponse.json({error:"User not found"},{status:404});
        }
        return NextResponse.json({
            message: "User found",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({message:error.message},{status:500});
    }
}   