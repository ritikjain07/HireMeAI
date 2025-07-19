import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {Link, useNavigate} from "react-router";
import {useEffect, useState} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);

      const resumes = (await kv.list('resume:*', true)) as KVItem[];

      const parsedResumes = resumes?.map((resume) => (
          JSON.parse(resume.value) as Resume
      ))

      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    }

    loadResumes()
  }, []);

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

        <section className="main-section">
          <div className="page-heading py-16 relative">
            {/* Glowing effect behind heading */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent blur-3xl"></div>
            
            <div className="relative z-10">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
                Track Your Applications & Resume Ratings
              </h1>
              {!loadingResumes && resumes?.length === 0 ? (
                <h2 className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">No resumes found. Upload your first resume to get feedback.</h2>
              ): (
                <h2 className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">Review your submissions and check AI-powered feedback with our advanced analytics platform</h2>
              )}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-lg"></div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 blur-lg"></div>
          </div>

          {loadingResumes && (
            <div className="flex flex-col items-center justify-center">
              <img src="/images/resume-scan-2.gif" className="w-[200px]" />
            </div>
          )}

          {!loadingResumes && resumes.length > 0 && (
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

          {!loadingResumes && resumes?.length === 0 && (
            <div className="flex flex-col items-center justify-center mt-10 gap-4">
              <Link to="/upload" className="primary-button w-fit text-xl font-semibold">
                Upload Resume
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
