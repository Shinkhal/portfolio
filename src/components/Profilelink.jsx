"use client";

import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBehance,
  FaHackerrank,
  FaStackOverflow,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
  SiCodeforces,
  SiHackerearth,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { profileLinks } from "@/details";
import BlurFade from "@/components/magicui/blur-fade";

const ProfileLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const iconMap = {
    FaGithub,
    FaLinkedin,
    FaBehance,
    FaHackerrank,
    FaStackOverflow,
    SiLeetcode,
    SiGeeksforgeeks,
    SiCodechef,
    SiCodeforces,
    SiHackerearth,
    MdEmail,
  };

  const getBrandColor = (name) => {
    const colors = {
      GitHub: "#181717",
      LinkedIn: "#0A66C2",
      LeetCode: "#FFA116",
      CodeChef: "#5B4638",
      Codeforces: "#1F8ACB",
      HackerRank: "#00EA64",
      GeeksforGeeks: "#0F9D58",
      "Stack Overflow": "#F58025",
      Email: "#EA4335",
      Behance: "#1769FF",
      HackerEarth: "#323754",
    };
    return colors[name] || "#6366F1";
  };

  return (
    <div className="bg-neutral-900 p-4 sm:p-6 rounded-xl shadow-md border border-gray-800">
      <BlurFade delay={0.2} inView>
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Find Me Online
          </h2>
          <p className="text-sm text-gray-400">
            Click any icon to visit my profiles.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6 place-items-center">
          {profileLinks.map((link, index) => {
            const Icon = iconMap[link.icon];
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={link.name}
                className="relative flex flex-col items-center mb-10"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-white flex items-center justify-center transition-all duration-300 ${
                      isHovered ? "scale-110 shadow-lg" : "scale-100"
                    }`}
                    style={{
                      backgroundColor: getBrandColor(link.name),
                      boxShadow: isHovered
                        ? `0 0 20px ${getBrandColor(link.name)}40`
                        : "0 8px 15px rgba(0,0,0,0.2)",
                    }}
                  >
                    <Icon
                      size={isHovered ? 26 : 22}
                      className="text-white transition-all duration-300"
                    />
                  </div>

                  {/* Tooltip */}
                  <div
                    className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-300 text-center ${
                      isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                  >
                    <div className="px-2 py-1 bg-gray-800/90 text-white text-xs rounded-md shadow-lg border border-gray-600">
                      {link.name}
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </BlurFade>
    </div>
  );
};

export default ProfileLinks;
