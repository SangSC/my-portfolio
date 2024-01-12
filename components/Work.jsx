"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:max-w-[30%] flex flex-col justify-center items-center">
          <h2 className="section-title mt-12 mb-12 xl:mt-80 tracking-[4px] text-center mx-auto">
            Projects
          </h2>
          <p className="subtitle mb-8 text-center mx-auto">
            projects for practice
          </p>
          <Link href="/projects">
            <Button className="mx-auto">All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[65%] xl:absolute right-8 top-0 mt-40 flex justify-center items-center 2xl:right-16">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only 3 projects */}
            {projectData.slice(0, 3).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>{" "}
        </div>
      </div>
    </section>
  );
};

export default Work;
