"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { projectDetails } from "@/details";
import { motion } from "framer-motion";

export function ThreeDCardDemo() {
  const Header = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 mt-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bebus font-bold text-orange-500 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Project Portfolio
        </motion.h1>
        <motion.p
          className="max-w-2xl text-base md:text-lg text-gray-400 font-extralight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          This collection highlights some of my most exciting and innovative work, spanning web development 
          and full-stack applications. Each project reflects my passion for creating impactful solutions 
          using the latest technologies
        </motion.p>
      </div>
    );
  };

  return (
    <>
      <Header />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {projectDetails.map((project) => (
          <CardContainer key={project.title} className="inter-var">
            <CardBody className="bg-neutral-900 relative group/card border border-neutral-700 w-auto sm:w-full h-auto rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:border-neutral-600">
              {/* Tech badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-xs font-medium py-1 px-2 rounded-full bg-neutral-800 text-gray-300 border border-gray-600">
                  {project.techstack.split(',')[0].trim()}
                </span>
              </div>

              <CardItem
                translateZ="50"
                className="text-lg font-semibold text-white"
              >
                {project.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-gray-400 text-sm max-w-sm mt-2 line-clamp-2 h-10"
              >
                {project.description}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    height={600}
                    width={600}
                    className="h-60 w-full object-cover rounded-xl transition-all duration-500 ease-out transform group-hover/card:scale-105"
                    alt={project.title}
                  />
                </div>
              </CardItem>

              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700">
                {project.previewLink ? (
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.previewLink}
                    target="_blank"
                    className="px-4 py-2 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-neutral-700 transition-all"
                  >
                    👁️ Preview
                  </CardItem>
                ) : (
                  <div className="text-gray-500 text-xs px-4 py-2">No Preview</div>
                )}

                {project.githubLink ? (
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.githubLink}
                    target="_blank"
                    className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-all"
                  >
                    🐙 GitHub
                  </CardItem>
                ) : (
                  <div className="text-gray-500 text-xs px-4 py-2">No GitHub Link</div>
                )}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}
