"use client"

import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function Profile() {
  const router = useRouter();

  const handleLogout = async () =>{
      try {
          await axios.get("/api/users/logout");
          toast.success("Logout successfully");
          router.push("/");
      } catch (error:any) {
        return toast.error("Logout failed. Please try again." + error.message);
      }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Your Profile</h1>
          <p className="text-xl text-gray-600">Manage your account and preferences</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">👤</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Account Info</h2>
              <p className="text-gray-600 mb-6">View your account details</p>
              <a href="/getviatoken" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                View Details
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🚪</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Logout</h2>
              <p className="text-gray-600 mb-6">Sign out of your account securely</p>

              <button 
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                Logout
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="/" className="text-gray-600 hover:text-gray-800 font-medium">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}   