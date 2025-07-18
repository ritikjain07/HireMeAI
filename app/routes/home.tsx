import { useEffect } from "react";
import { useNavigate } from "react-router";
import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants/index";
import Navbar from "~/components/Navbar";
import { usePuterStore } from "~/lib/puter";

export function meta() {
  return [
    { title: "HireMe AI" },
    { name: "description", content: "Get Noticed. Get Hired. Smarter with AI." },
  ];
}

export default function Home() {
  const {auth} = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.isAuthenticated) {
            // Redirect to dashboard or perform any other action
            navigate('/auth?next=/');
        }
    }, [auth.isAuthenticated]);
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Advanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="floating-particles"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        {/* {window.puter.ai.chat()} */}

        <section className="main-section">
          <div className="page-heading py-16 relative">
            {/* Glowing effect behind heading */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent blur-3xl"></div>
            
            <div className="relative z-10">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
                Track Your Application & Resume Rating
              </h1>
              <h2 className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Review your submissions and check AI-powered feedback with our advanced analytics platform
              </h2>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-lg"></div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 blur-lg"></div>
          </div>

          {resumes.length > 0 && (
            <div className="resumes-section relative">
              {/* Background glow for resume section */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50 rounded-3xl blur-xl"></div>
              
              {resumes.map((resume) => (
                <div key={resume.id} className="relative z-10">
                  <ResumeCard key={resume.id} resume={resume} />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
