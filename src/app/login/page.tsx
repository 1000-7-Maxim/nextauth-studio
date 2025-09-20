"use client"

import { toast } from "react-hot-toast";
import axios from "axios";
import React,{useEffect} from "react";
import { useRouter } from "next/navigation";

export default function LoginPage(){
    const router = useRouter();

    const [user, setUser] = React.useState({
        email:"",
        password:""
    });

    const [loading, setLoading] = React.useState(false);
    const[buttonDisabled,setButtonDisabled] = React.useState(false);

    const onLogin = async()=>{
        try {
            setLoading(true);
            const response=await axios.post("/api/users/login",user);
            console.log("Login success", response.data);
            toast.success("Login successful");
            router.push("/profile");
        }catch (error:any) {
            console.log("Login faild", error.message);
            toast.error(error.message);
        }finally{
            setLoading(false);
        };
    }

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user])   

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-12 px-4">
            <div className="max-w-md mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        {loading ? "Processing..." : "Welcome Back"}
                    </h1>
                    <p className="text-gray-600">Sign in to your account</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                📧 Email
                            </label>
                            <input 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                            type="text" 
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
                        onClick={onLogin}
                        disabled={buttonDisabled || loading}
                        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
                        {loading ? "Processing..." : buttonDisabled ? "Fill all fields" : "Login"}
                        </button>
                        
                        <div className="text-center">
                            <a href="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
                                Don't have an account? Sign up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}