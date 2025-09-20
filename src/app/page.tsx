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
              Complete Next.js 15 fullstack authentication system with modern UI, JWT tokens, and MongoDB integration
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern Tech Stack</h3>
            <p className="text-gray-600">Built with Next.js 15, React 19, TypeScript, and Tailwind CSS</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Authentication</h3>
            <p className="text-gray-600">JWT tokens, bcrypt hashing, and HTTP-only cookies</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl mb-4">🗄️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">MongoDB Integration</h3>
            <p className="text-gray-600">Seamless database integration with Mongoose ODM</p>
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

        {/* Tech Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Built With</h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
            <span className="bg-white px-3 py-1 rounded-full shadow">Next.js 15</span>
            <span className="bg-white px-3 py-1 rounded-full shadow">React 19</span>
            <span className="bg-white px-3 py-1 rounded-full shadow">TypeScript</span>
            <span className="bg-white px-3 py-1 rounded-full shadow">Tailwind CSS</span>
            <span className="bg-white px-3 py-1 rounded-full shadow">MongoDB</span>
            <span className="bg-white px-3 py-1 rounded-full shadow">JWT</span>
            <span className="bg-white px-3 py-1 rounded-full shadow">bcryptjs</span>
          </div>
        </div>
      </div>
    </div>
  );
}