"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("/api/users/getviatoken");
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      setIsLoggedIn(false);
      window.location.reload();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-6xl mb-4 block">🔐</span>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              NextAuth Studio
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Production-ready Next.js 15 authentication system with real email verification, JWT tokens, and MongoDB integration
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Verification</h3>
            <p className="text-gray-600">Real email verification with Gmail SMTP integration and secure token validation</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Security</h3>
            <p className="text-gray-600">JWT tokens, bcrypt hashing, HTTP-only cookies, and middleware protection</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Production Ready</h3>
            <p className="text-gray-600">Built with Next.js 15, React 19, TypeScript, and modern best practices</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            {loading ? "Loading..." : isLoggedIn ? "Dashboard" : "Get Started"}
          </h2>
          
          {!loading && (
            <div className="flex flex-wrap justify-center gap-4">
              {isLoggedIn ? (
                // Logged in user buttons
                <>
                  <Link href="/profile" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                    Profile
                  </Link>
                  <button onClick={handleLogout} className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                    Logout
                  </button>
                </>
              ) : (
                // Not logged in user buttons
                <>
                  <Link href="/signup" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                    Sign Up
                  </Link>
                  <Link href="/login" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                    Login
                  </Link>
                </>
              )}
            </div>
          )}
        </div>

        {/* Additional Features */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Real email verification system</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">JWT-based authentication</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Protected routes with middleware</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Password hashing with bcrypt</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">HTTP-only secure cookies</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Toast notifications</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Responsive modern UI</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">MongoDB integration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Built With Modern Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
            <span className="bg-white px-4 py-2 rounded-full shadow hover:shadow-md transition-shadow">Next.js 15</span>
            <span className="bg-white px-4 py-2 rounded-full shadow hover:shadow-md transition-shadow">React 19</span>
            <span className="bg-white px-4 py-2 rounded-full shadow hover:shadow-md transition-shadow">TypeScript</span>
            <span className="bg-white px-4 py-2 rounded-full shadow hover:shadow-md transition-shadow">Tailwind CSS 4</span>
            <span className="bg-white px-4 py-2 rounded-full shadow hover:shadow-md transition-shadow">MongoDB</span>
            <span className="bg-white px-4 py-2 rounded-full shadow hover:shadow-md transition-shadow">JWT</span>
            <span className="bg-white px-4 py-2 rounded-full shadow hover:shadow-md transition-shadow">Nodemailer</span>
            <span className="bg-white px-4 py-2 rounded-full shadow hover:shadow-md transition-shadow">bcryptjs</span>
          </div>
        </div>
      </div>
    </div>
  );
}