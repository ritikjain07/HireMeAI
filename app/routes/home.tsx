import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants/index";
import Navbar from "~/components/Navbar";

export function meta() {
  return [
    { title: "HireMe AI" },
    { name: "description", content: "Get Noticed. Get Hired. Smarter with AI." },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Application & Resume Rating</h1>
        <h2>Review your submissions and check AI-powered feedback</h2>
      </div>

      {resumes.length > 0 && (
      <div className="resumes-section">
        {resumes.map((resume) => (
      <div key={resume.id}>
        <ResumeCard key={resume.id} resume={resume} />
      </div>
    ))}
      </div>
    )}
    </section>


    

    
  </main>
}
