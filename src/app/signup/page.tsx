"use client"

import { toast } from "react-hot-toast";
import axios from "axios";
import React,{useEffect} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage(){
    const router = useRouter();

    const [user, setUser] = React.useState({
        username:"",
        email:"",
        password:""
    });

    const [loading, setLoading] = React.useState(false);
    const[buttonDisabled,setButtonDisabled] = React.useState(false);

    const onSignUp = async()=>{
        try {
            setLoading(true);
            const response=await axios.post("/api/users/signup",user);
            console.log("Signup success", response.data);
            toast.success(response.data.message || "Account created! Check your email for verification link.");
            // Don't redirect immediately, let user see the message
            setTimeout(() => {
                router.push("/login");
            }, 2000);
        } catch (error:any) {
            console.log("Signup failed", error.response?.data);
            toast.error(error.response?.data?.error || "Signup failed");
        }finally{
            setLoading(false);
        };
    }

    useEffect(()=>{
        if(user.username.length>0 && user.email.length>0 && user.password.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user])
    

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-100 py-12 px-4">
            <div className="max-w-md mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        {loading ? "Processing..." : "Create Account"}
                    </h1>
                    <p className="text-gray-600">Join us today</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                                👤 Username
                            </label>
                            <input
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                            type="text" 
                            id="username" 
                            value={user.username} 
                            onChange={(e)=>setUser({...user,username:e.target.value})}
                            autoComplete="new-username"
                            placeholder="Enter your username"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                📧 Email
                            </label>
                            <input 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                            type="email"
                            id="email"
                            value={user.email}
                            onChange={(e)=>setUser({...user,email:e.target.value})}
                            autoComplete="new-email"
                            placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                🔒 Password
                            </label>
                            <input 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                            type="password"
                            id="password"
                            value={user.password}
                            onChange={(e)=>setUser({...user,password:e.target.value})}
                            autoComplete="new-password"
                            placeholder="Enter your password"
                            />
                        </div>

                        <button 
                        onClick={onSignUp}
                        disabled={buttonDisabled || loading}
                        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
                        {loading ? "Processing..." : buttonDisabled ? "Fill all fields" : "Sign Up"}
                        </button>
                        
                        <div className="text-center">
                            <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                                Already have an account? Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}