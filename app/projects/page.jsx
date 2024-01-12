"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
// import { fadeIn } from "../../variants";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/bump-pr-site.jpg",
    category: "Next.JS",
    name: "BUMP PR Site",
    description: "BUMP TOUR Unofficial Promotion Site.",
    github: "https://github.com/SangSC/bump-pr-site",
  },
  {
    image: "/work/snake-game.jpg",
    category: "JavaScript",
    name: "Snake Game",
    description: "Simple snake game with basic controls.",
    github: "https://github.com/SangSC/snake-game",
  },
  {
    image: "/work/music-player.jpg",
    category: "JavaScript",
    name: "Music Player",
    description: "Music player with basic controls.",
    github: "https://github.com/SangSC/music-player",
  },
  {
    image: "/work/video-player.jpg",
    category: "JavaScript",
    name: "Video Player",
    description: "Video player with basic controls.",
    github: "https://github.com/SangSC/video-player",
  },

  {
    image: "/work/porfolio.jpg",
    category: "Next.JS",
    name: "Portfolio",
    description: "My Portfolio",
    github: "https://github.com/SangSC/my-portfolio",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filterProjects = projectData.filter((project) => {
    // if category is all projects, return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        layout
        layoutRoot
      >
        <h2 className="section-title mb-8 xl:mb-16 tracking-[4px] text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-50">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:md:border">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <motion.div
            className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4"
            layout
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {filterProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </motion.div>
        </Tabs>
      </motion.div>
      <div className="lg:h-[50px]"></div>
    </section>
  );
};

export default Projects;
