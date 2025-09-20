import { connectToDB } from "@/app/dbConfig/dbConfig";  
import User from "@/app/models/userModels"
import bcryptjs from "bcryptjs";
import { NextRequest,NextResponse } from "next/server";


export async function POST(request:NextRequest){
    try {
        await connectToDB();
        const reqBody= await request.json();
        const {username,email,password}=reqBody;
        console.log(reqBody);


        //check if user already exist 
        const user=await User.findOne({email});
        if(user){
            return NextResponse.json({error:"User already exist."},{status:400});
        }

        //hash password

        const salt=await bcryptjs.genSalt(10);
        const hashedPassword=await bcryptjs.hash(password,salt);

        const newUser = new User({
            username,
            email,
            password:hashedPassword
        })

        const savedUser = await newUser.save();
        console.log(savedUser);
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

    } catch (error:any) {
        return NextResponse.json({message:error.message},{status:500});
        
    }
}

