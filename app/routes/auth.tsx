import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { usePuterStore } from '~/lib/puter'

export const meta = () => {
  return [
    { title: "HireMe AI - Authentication" },
    { name: "description", content: "Authenticate to access your resume feedback and upload new resumes." }
  ]
}

const auth = () => {
  
    const {isLoading, auth} = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1] || '/';
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) {
            // Redirect to dashboard or perform any other action
            navigate(next);
        }
    }, [auth.isAuthenticated, next, navigate]);

  return (
    <main className='relative min-h-screen overflow-hidden flex items-center justify-center'>
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-pink-400 rounded-full opacity-25 animate-float animation-delay-4000"></div>
      </div>
      
      {/* Main Auth Card */}
      <div className='relative z-10 w-full max-w-md mx-4'>
        {/* Glassmorphism effect */}
        <div className='relative backdrop-blur-lg bg-white/80 border border-white/20 rounded-3xl shadow-2xl overflow-hidden'>
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-sm"></div>
          <div className="absolute inset-0.5 bg-white rounded-3xl"></div>
          
          {/* Content */}
          <div className='relative z-10 p-8 md:p-10'>
            {/* Header Section */}
            <div className='flex flex-col items-center gap-6 text-center mb-8'>
              {/* Logo/Icon */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-30 -z-10"></div>
              </div>
              
              {/* Welcome Text */}
              <div className="space-y-2">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
                  Welcome Back
                </h1>
                <h2 className="text-lg text-gray-600 font-medium">
                  Continue your job journey with AI-powered insights
                </h2>
                <p className="text-sm text-gray-500 max-w-sm">
                  Access your resume analytics and get personalized feedback to land your dream job
                </p>
              </div>
            </div>
            
            {/* Auth Button Section */}
            <div className="space-y-4">
              {isLoading ? (
                <button className='w-full relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl py-4 px-8 font-semibold text-lg shadow-xl disabled:opacity-70 transition-all duration-300'>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 animate-pulse"></div>
                  <div className="relative flex items-center justify-center space-x-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing you in...</span>
                  </div>
                </button>
              ) : (
                <>
                  {auth.isAuthenticated ? (
                    <button 
                      className='w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-2xl py-4 px-8 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 active:scale-95' 
                      onClick={auth.signOut}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                        </svg>
                        <span>Sign Out</span>
                      </div>
                    </button>
                  ) : (
                    <button 
                      className='w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl py-4 px-8 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 active:scale-95 relative overflow-hidden group' 
                      onClick={auth.signIn}
                    >
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="relative flex items-center justify-center space-x-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Sign In to Continue</span>
                      </div>
                    </button>
                  )}
                </>
              )}
              
              {/* Additional Info */}
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Secure authentication powered by Puter
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative elements */}
        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-lg"></div>
        <div className="absolute -top-6 -right-6 w-8 h-8 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 blur-lg"></div>
      </div>
    </main>
  )
}

export default auth