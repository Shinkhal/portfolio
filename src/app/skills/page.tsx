"use client";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { SkillsGrid } from "@/components/SkillsGrid";
import { certifications } from "@/details";
import { Award, ExternalLink, FileText } from "lucide-react";
import gsap from "gsap";

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState<"skills" | "certifications">("skills");
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, [selectedTab]);

  return (
    <>
      <Head>
        <title>Skills & Certifications | Shinkhal Sinha</title>
        <meta
          name="description"
          content="Explore Shinkhal Sinha's technical proficiencies and certifications, including programming languages, technologies, and key skills."
        />
      </Head>

      <main className="min-h-screen bg-neutral-950 text-neutral-300 pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bebas tracking-wide text-neutral-100 mb-6">
            Skills & Certifications
          </h1>
          <p className="text-neutral-400 max-w-2xl text-base sm:text-lg mb-10">
            A subtle showcase of my technical proficiencies and certifications — designed with minimalism in mind.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            {["skills", "certifications"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab as "skills" | "certifications")}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  selectedTab === tab
                    ? "bg-neutral-800 border-neutral-600 text-neutral-100"
                    : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800 hover:border-neutral-600"
                }`}
              >
                {tab === "skills" ? "Skills" : "Certifications"}
              </button>
            ))}
          </div>

          {/* Content section with GSAP animation */}
          <div ref={sectionRef}>
            {selectedTab === "skills" ? (
              <SkillsGrid />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert) => (
                  <CertificationCard key={cert.id} {...cert} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

// Minimalist certification card
const CertificationCard = ({ title, link, pdfurl, issuer = "Issuer" }) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-md p-5 hover:border-neutral-700 transition-all duration-300">
      <div className="flex items-start gap-3 mb-4">
        <div className="bg-neutral-800 p-2 rounded-md">
          <Award size={20} className="text-neutral-400" />
        </div>
        <div>
          <h3 className="text-lg text-neutral-100 font-semibold">{title}</h3>
          <p className="text-sm text-neutral-500">{issuer}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4 text-sm">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-300 hover:text-white transition"
          >
            <ExternalLink size={14} /> View Certificate
          </a>
        )}
        {pdfurl && (
          <a
            href={pdfurl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition"
          >
            <FileText size={14} /> Download PDF
          </a>
        )}
      </div>
    </div>
  );
};
