export default async function UserProfile({params}: any) {
    const { id } = await params;
    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">User Profile</h1>
                    <p className="text-gray-600">Dynamic profile page</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-center">
                        
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile ID</h2>
                        
                        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-4 mb-6">
                            <span className="text-2xl font-mono font-bold text-orange-800">{id}</span>
                        </div>
                        
                        
                        <div className="mt-8 space-y-3">
                            <a href="/profile" className="block w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 text-center">
                                Back to Main Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
