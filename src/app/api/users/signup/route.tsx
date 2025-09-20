import { connectToDB } from "@/dbConfig/dbConfig";  
import { sendEmail } from "@/helpers/mailer";
import User from "@/models/userModels"
import bcryptjs from "bcryptjs";
import { NextRequest,NextResponse } from "next/server";


export async function POST(request:NextRequest){
    try {
        await connectToDB();
        const reqBody= await request.json();
        const {username,email,password}=reqBody;

        //hash password
        const salt=await bcryptjs.genSalt(10);
        const hashedPassword=await bcryptjs.hash(password,salt);

        const newUser = new User({
            username,
            email,
            password:hashedPassword
        })

        let savedUser;
        try {
            savedUser = await newUser.save();
        } catch (error: any) {
            console.error("Database save error:", error.message);
            throw error;
        }

        //send verification mail
        await sendEmail({email, emailType: "VERIFY", userId: savedUser._id});

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

    } catch (error:any) {
        console.error("Signup error:", error.message);
        console.error("Full error object:", error);
        return NextResponse.json({message:error.message},{status:500});
        
    }
}

