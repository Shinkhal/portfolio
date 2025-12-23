// components/About.tsx
"use client";

import React, { useEffect, useState } from "react";
import {
  personalDetails,
  workDetails,
  eduDetails,
  achievements,
} from "../details";
import {
  Building,
  GraduationCap,
  MapPin,
  Calendar,
} from "lucide-react";
import HyperText from "./magicui/hyper-text";
import GitHubCalendarComponent from "./Github";
import Coding from "./Coding";
import FadeInSection from "./FadeInSection";
import { useParallax } from "@/hooks/useParallax";
import { Separator } from "./ui/separator";
import Snowfall from 'react-snowfall'

const roles = [
  "Web Developer",
  "Mobile Developer",
  "UI/UX Designer",
  "Coder",
  "Graphic Designer",
];

function About() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((i) => (i + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const titleRef = useParallax({ speed: 25 });
  const subTitleRef = useParallax({ speed: 15 });
  const experienceRef = useParallax({ speed: 20 });
  const educationRef = useParallax({ speed: 20 });
  const achievementRef = useParallax({ speed: 20 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-200">
    <Snowfall/>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeInSection>
  <section className="py-32 px-4 sm:px-8">
    <h3
      ref={subTitleRef}
      className="text-center text-sm sm:text-base md:text-lg tracking-wide text-neutral-400 uppercase mb-6"
    >
      Hey, I’m
    </h3>

    <div className="flex flex-col gap-2 sm:gap-3 mb-6">
      <div className="flex justify-start" ref={titleRef}>
        <HyperText
          text="Shinkhal"
          className="font-bebas font-extrabold text-neutral-700 text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] leading-[0.9] tracking-tight uppercase"
        />
      </div>
      <div className="flex justify-end">
        <HyperText
          text="Sinha"
          className="font-bebas font-extrabold text-neutral-700 text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] leading-[0.9] tracking-tight uppercase"
        />
      </div>
    </div>

    <h2 className="text-center text-base sm:text-lg md:text-xl font-medium text-neutral-500 tracking-widest uppercase">
      {roles[currentRoleIndex]}
    </h2>
  </section>
</FadeInSection>


        <Separator className="my-16 bg-neutral-700" />


        <FadeInSection>
          <section className="py-12 sm:py-16">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2 bg-neutral-850 border border-neutral-700 rounded-md p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">About Me</h3>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {personalDetails?.about}
                </p>
              </div>
              <div className="lg:w-1/2 flex flex-col gap-6">
                {[
                  ["My Passion", "Beyond my professional work, I'm deeply passionate about technology that makes a difference. I believe in creating solutions that address real-world problems and enhance people's daily lives."],
                  ["Personal Interests", `When I'm not coding, you can find me ${personalDetails?.hobbies || "exploring new technologies, hiking, and gaming"}. I believe in maintaining a healthy work-life balance.`]
                ].map(([title, text], i) => (
                  <div
                    key={i}
                    className="bg-neutral-850 border border-neutral-700 rounded-md p-5 sm:p-6 hover:bg-neutral-800/80 transition-all text-sm sm:text-base"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2 sm:mb-4">
                      {title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        <Separator className="my-16 bg-neutral-700" />

        <FadeInSection>
          <section className="py-12 sm:py-16">
            <div ref={experienceRef} className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Professional Experience</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {workDetails.map((work, i) => (
                <div
                  key={i}
                  className="bg-neutral-850 border border-neutral-700 rounded-md p-5 sm:p-6 flex flex-col justify-between hover:bg-neutral-800/80 transition-all"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{work.Position}</h3>
                    <p className="text-neutral-300 text-sm font-medium mb-3">{work.Company}</p>
                  </div>
                  <div className="text-xs flex flex-wrap gap-2 mb-4 text-neutral-400">
                    <span className="flex items-center bg-neutral-700 rounded px-2 py-1">
                      <Calendar size={12} className="mr-1" />
                      {work.Duration}
                    </span>
                    <span className="flex items-center bg-neutral-700 rounded px-2 py-1">
                      <MapPin size={12} className="mr-1" />
                      {work.Location}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-300 flex-grow mb-4">{work.description}</p>
                  <div className="text-xs text-neutral-500">{work.Type}</div>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <Separator className="my-16 bg-neutral-700" />


        <FadeInSection>
          <section className="py-12 sm:py-16">
            <div ref={educationRef} className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Academic Background</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {eduDetails.map((edu, i) => (
                <div
                  key={i}
                  className="bg-neutral-850 border border-neutral-700 rounded-md p-5 sm:p-6 hover:bg-neutral-800/80 transition-all text-sm"
                >
                  <div className="flex justify-center mb-4">
                    <GraduationCap size={28} className="text-neutral-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center">{edu.Course}</h3>
                  <p className="text-neutral-400 text-sm text-center mb-4">{edu.Branch}</p>
                  <div className="space-y-2 text-neutral-300">
                    <div className="flex items-start"><Building className="mr-2 text-neutral-500" size={14} />{edu.Institute}</div>
                    <div className="flex items-start"><MapPin className="mr-2 text-neutral-500" size={14} />{edu.Location}</div>
                    <div className="flex items-start"><Calendar className="mr-2 text-neutral-500" size={14} />{edu.Duration}</div>
                  </div>
                  {edu.achievements && (
                    <div className="mt-4 pt-4 border-t border-neutral-700 text-neutral-500 text-xs">{edu.achievements}</div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <Separator className="my-16 bg-neutral-700" />

        <FadeInSection>
          <Coding />
          <GitHubCalendarComponent username="Shinkhal" />
        </FadeInSection>

        <Separator className="my-16 bg-neutral-700" />

<FadeInSection>
  <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div ref={achievementRef} className="text-center mb-10 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
        Key Achievements
      </h2>
      <p className="text-neutral-400 max-w-3xl mx-auto mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
        A showcase of milestones and recognitions that reflect my journey, growth, and contributions to the tech community.
      </p>
    </div>

    {/* Timeline Container */}
    <div className="relative max-w-4xl mx-auto">
      {/* Center line (only visible on large screens) */}
      <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-neutral-700" />

      {achievements.map((a, i) => (
        <div
          key={a.id}
          className={`relative flex flex-col sm:flex-row items-center mb-12 sm:mb-16 ${
            i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
          }`}
        >
          {/* Mobile Timeline Node (visible only below sm) */}
          <div className="flex sm:hidden flex-col items-center mb-4">
            <div className="w-3.5 h-3.5 bg-orange-500 rounded-full border-4 border-neutral-950 shadow-md" />
            <span className="bg-neutral-900 border border-neutral-700 text-white text-xs px-2 py-0.5 rounded mt-2 shadow-sm">
              {a.year}
            </span>
          </div>

          {/* Content Card */}
          <div
            className={`w-full sm:w-5/12 ${
              i % 2 === 0 ? "text-right sm:pr-6" : "text-left sm:pl-6"
            }`}
          >
            <div className="bg-neutral-900/80 border border-neutral-700 rounded-lg p-5 sm:p-6 hover:bg-neutral-800 transition-colors duration-300 shadow-md">
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                {a.title}
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                {a.description}
              </p>
            </div>
          </div>

          {/* Desktop Timeline Node (centered only on sm and above) */}
          <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 flex-col items-center z-10">
            <div className="w-3.5 h-3.5 bg-orange-500 rounded-full border-4 border-neutral-950 shadow-md" />
            <span className="bg-neutral-900 border border-neutral-700 text-white text-xs sm:text-sm px-2 py-0.5 rounded mt-2 shadow-sm">
              {a.year}
            </span>
          </div>

          {/* Alignment spacer for desktop */}
          <div className="hidden sm:block w-5/12" />
        </div>
      ))}
    </div>
  </section>
</FadeInSection>
      

        <Separator className="my-20 bg-neutral-700" />

<FadeInSection>
  <section className="flex justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
    <div className="border border-neutral-700 rounded-lg sm:rounded-xl md:rounded-2xl 
                    bg-neutral-900/80 backdrop-blur-sm shadow-lg 
                    w-full max-w-2xl p-6 sm:p-10 md:p-12 text-center space-y-6">
      
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-bebas font-bold uppercase 
                     text-orange-500 tracking-wide leading-tight">
        Download <br className="hidden sm:block" /> My CV
      </h2>

      <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-lg mx-auto">
        Interested in working together? Download my CV to explore my skills, experience, and projects.
      </p>

      <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/api/download-cv";
          link.setAttribute("download", "Shinkhal_Resume.pdf");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        className="inline-block border border-white/30 text-white text-sm sm:text-base 
                   px-6 sm:px-8 py-3 sm:py-4 rounded-md font-medium 
                   hover:bg-orange-500 hover:text-black 
                   transition-all duration-300 hover:scale-105 active:scale-100"
      >
        Download CV
      </button>
    </div>
  </section>
</FadeInSection>




      </div>
    </div>
  );
}

export default About;
