"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const verifyUserEmail = async () => {
        try {
            setLoading(true);
            await axios.post('/api/users/verifyemail', {token})
            setVerified(true);
        } catch (error:any) {
            setError(true);
            console.log(error.reponse.data);
        } finally {
            setLoading(false);
        }
    }

    // as soon as somebody comes to this page we will get the token from the url
    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    // Token is set, verify email run automatically
    useEffect(() => {
        if(token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center px-4">
            <div className="max-w-md w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="text-6xl mb-4">📧</div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Email Verification</h1>
                    <p className="text-gray-600">Verifying your email address...</p>
                </div>

                {/* Token Display */}
                {token && (
                    <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
                        <p className="text-sm text-gray-500 mb-2">Verification Token:</p>
                        <p className="font-mono text-xs bg-gray-100 p-2 rounded break-all">
                            {token.substring(0, 20)}...
                        </p>
                    </div>
                )}

                {/* Loading State */}
                {loading && (
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-200">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Verifying...</h2>
                        <p className="text-gray-600">Please wait while we verify your email</p>
                    </div>
                )}

                {/* Success State */}
                {verified && !loading && (
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <div className="text-5xl mb-4">✅</div>
                        <h2 className="text-2xl font-bold text-green-600 mb-4">Email Verified Successfully!</h2>
                        <p className="text-gray-600 mb-6">Your email has been verified. You can now login to your account.</p>
                        <Link href="/login" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl inline-block">
                            Continue to Login
                        </Link>
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <div className="text-5xl mb-4">❌</div>
                        <h2 className="text-2xl font-bold text-red-600 mb-4">Verification Failed</h2>
                        <p className="text-gray-600 mb-6">The verification link is invalid or has expired. Please try signing up again.</p>
                        <div className="space-y-3">
                            <Link href="/signup" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl inline-block w-full">
                                Sign Up Again
                            </Link>
                            <Link href="/" className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 shadow-lg hover:shadow-xl inline-block w-full">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                )}

                {/* No Token State */}
                {!token && !loading && (
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-200">
                        <div className="text-5xl mb-4">⚠️</div>
                        <h2 className="text-2xl font-bold text-orange-600 mb-4">No Verification Token</h2>
                        <p className="text-gray-600 mb-6">No verification token found in the URL. Please check your email for the verification link.</p>
                        <Link href="/" className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 shadow-lg hover:shadow-xl inline-block">
                            Back to Home
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}