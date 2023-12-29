"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className=" py-6 xl:py-10 xl:pt-10 bg-hero bg-repeat-x bg-bottom dark:bg-none ">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex justify-between gap-x-8 2xl:justify-center 2xl:gap-x-16">
          {/* image */}
          <div className="hidden xl:flex relative">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-20 -left-2 "></div>
            <DevImg
              containerStyles="bg-hero_shape w-[470px] h-[470px] bg-no-repeat relative bg-bottom -top-20 -left-2"
              imgSrc="/hero/me.png"
            />
          </div>

          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              About Me
            </div>
            <h1 className="h1 mb-4">Hello, I am Sang!</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Still learning.
            </p>
            {/* button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me
                  <Send size={18} />
                </Button>
              </Link>
              <a href="/resume.pdf" download>
                <Button variant="secondary" className="gap-x-2">
                  Download CV
                  <Download size={18} />
                </Button>
              </a>
              {/* socials */}
              <Socials
                containerStyles="flex gap-x-6 mx-auto mt-1 lg:flex-col xl:ml-0 "
                iconStyles="text-forground text-[30px] hover:text-primary transition-all"
              />
            </div>
          </div>
        </div>
        {/* icon */}
        <div
          className="hidden sm:flex absolute left-[48%] bottom-40 md:bottom-10 animate-bounce
        "
        >
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Hero), { ssr: false });
