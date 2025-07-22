"use client";

import { skills } from "@/details";
import {
  Code, Database, Server, Github,
  Globe, FileCode, Layers, Cpu,
  Cloud, Terminal, Box
} from "lucide-react";




// Muted icons for matte theme (mostly neutral)
const skillIcons = {
  "HTML5": <Globe className="text-neutral-400" size={16} />,
  "CSS3": <FileCode className="text-neutral-400" size={16} />,
  "JavaScript": <Code className="text-neutral-400" size={16} />,
  "ReactJS": <Box className="text-neutral-400" size={16} />,
  "React Native": <Box className="text-neutral-400" size={16} />,
  "Next.js": <Box className="text-neutral-400" size={16} />,
  "Angular": <Box className="text-neutral-400" size={16} />,
  "Tailwind CSS": <Layers className="text-neutral-400" size={16} />,
  "Bootstrap": <Layers className="text-neutral-400" size={16} />,
  "jQuery": <Code className="text-neutral-400" size={16} />,
  "Node.js": <Server className="text-neutral-400" size={16} />,
  "Express.js": <Server className="text-neutral-400" size={16} />,
  "PHP": <FileCode className="text-neutral-400" size={16} />,
  "REST APIs": <Terminal className="text-neutral-400" size={16} />,
  "C": <Terminal className="text-neutral-400" size={16} />,
  "C++": <Terminal className="text-neutral-400" size={16} />,
  "Java": <Terminal className="text-neutral-400" size={16} />,
  "Python": <Terminal className="text-neutral-400" size={16} />,
  "Data Structures & Algorithms": <Cpu className="text-neutral-400" size={16} />,
  "Competitive Programming": <Cpu className="text-neutral-400" size={16} />,
  "MongoDB": <Database className="text-neutral-400" size={16} />,
  "MySQL": <Database className="text-neutral-400" size={16} />,
  "Firebase": <Database className="text-neutral-400" size={16} />,
  "AWS": <Cloud className="text-neutral-400" size={16} />,
  "Docker": <Cloud className="text-neutral-400" size={16} />,
  "Git": <Github className="text-neutral-400" size={16} />,
  "GitHub": <Github className="text-neutral-400" size={16} />
};

const mainCategories = ["Frontend", "Backend", "Programming", "Infrastructure"];

const SkillItem = ({ skill }) => {
  return (
    <div className="flex items-center gap-2 py-2 px-1 border-b border-neutral-800 hover:bg-neutral-800/40 rounded transition-colors">
      <div>{skillIcons[skill.content]}</div>
      <span className="text-sm text-neutral-300">{skill.content}</span>
    </div>
  );
};

export function SkillsGrid() {
  const categorizedSkills = {
    Frontend: [],
    Backend: [],
    Programming: [],
    Infrastructure: []
  };


  Object.entries(skills).forEach(([category, skillsList]) => {
    if (categorizedSkills[category]) {
      categorizedSkills[category] = skillsList;
    }
  });

  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" >
        {mainCategories.map((category) => (
          <div
            key={category}
            className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-neutral-700/80 transition-all"
          >
            <h3 className="text-lg font-semibold text-neutral-200 mb-4 pb-2 border-b border-neutral-800">
              {category}
            </h3>
            <div className="space-y-1">
              {categorizedSkills[category]?.length > 0 ? (
                categorizedSkills[category].map((skill) => (
                  <SkillItem key={skill.id} skill={skill} />
                ))
              ) : (
                <div className="text-sm text-neutral-500 italic">No skills listed</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
