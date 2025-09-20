import { connectToDB } from "@/app/dbConfig/dbConfig";
import User from "@/app/models/userModels"
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";


export async function POST(request:NextRequest){
    try {
        await connectToDB();
        const reqBody=await request.json();
        const {email,password}=reqBody;
        console.log(reqBody);


        // check if user exists
        const user =await User.findOne({email});
        if(!user){
            return NextResponse.json({error:"User not found. Please sign up."},{status:404});
        }

        // check if password matches
        const isMatch=await bcryptjs.compare(password,user.password);
        if(!isMatch){
            return NextResponse.json({error:"Invalid credentials"},{status:400});
        }


        // cteate session or token

        const tokenData={
            username:user.username,
            email:user.email,
            id:user.id
        }

        const token=jwt.sign(tokenData,process.env.JWT_SECRET_KEY!,{expiresIn:"1d"});
        console.log("Generated Token:", token);

        const response = NextResponse.json({
            message:"Login successful",
            success:true,
            user:{
                _id:user._id,
                username:user.username,
                email:user.email
            }
        });
        response.cookies.set("auth-token",token,{httpOnly:true});

        return response;


    } catch (error:any) {
        return NextResponse.json({message:error.message},{status:500});
    }
}