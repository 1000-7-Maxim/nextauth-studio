"use client"

import { useEffect, useState } from "react";
import axios from "axios";

export default function GetViaTokenPage() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("/api/users/getviatoken");
                setUser(response.data.data);
            } catch (error: any) {
                setError(error.response?.data?.message || "Failed to fetch user");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
    );
    
    if (error) return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
                <p className="text-red-600 font-medium">{error}</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-md mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">User Profile</h1>
                    <p className="text-gray-600">Retrieved via JWT Token</p>
                </div>
                
                {user && (
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 text-lg">👤</span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Username</p>
                                    <p className="font-semibold text-gray-800">{(user as any).username}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 text-lg">📧</span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-semibold text-gray-800">{(user as any).email}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <span className="text-purple-600 text-lg">🆔</span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">User ID</p>
                                    <p className="font-mono text-sm text-gray-700 bg-gray-50 px-2 py-1 rounded">{(user as any)._id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <div className="text-center mt-12">
            <a href="/profile" className="text-gray-600 hover:text-gray-800 font-medium">
                ← Back to Profile 
            </a>
            </div>
        </div>
    );
}