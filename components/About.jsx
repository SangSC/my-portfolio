import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  GraduationCap,
  Calendar,
  Briefcase,
  Languages,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Sang Chao",
  },
  {
    icon: <MailIcon size={20} />,
    text: "r.sang.chao@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 6 Aug, 1996",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor of MSE",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "National Dong Hwa University",
        qualification: "Bachelor of Materials Science & Engineering",
        year: "2014 - 2018",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "PCHOME CBS Bibian",
        role: "Japanese order fulfillment specialist",
        duriation: "2021.04 - 2023.03",
      },

      {
        company: "株式会社 通信館",
        role: "au Shop Staff",
        duriation: "2018.12 - 2020.11",
      },
      {
        company: "OPEN ACESSBPO",
        role: "Customer service team leader",
        duriation: "2018.08 - 2018.12",
      },
    ],
  },
];

const skillsData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, JavaScript, React, GitHub, tailwindcss, Next.js",
      },
    ],
  },
  {
    title: "language skills",
    data: [
      {
        language: "Japanese",
        certificate: "Business Japanese Proficiency Test BJT",
        grade: "J1+",
      },
      {
        language: "Japanese",
        certificate: "Japanese Language Proficiency Test JLPT",
        grade: "N1",
      },
      {
        language: "English",
        certificate: "Test of English for International Communication TOEIC",
        grade: "805",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-20">
      <div className="container mx-auto  xl:h-[900px]">
        <h2 className="section-title mb-12 mt-12 tracking-[4px] xl:mb-24 text-center mx-auto">
          My profile
        </h2>
        <div className="flex flex-col justify-center items-center xl:flex-row">
          {/* tabs */}
          <div className="flex-1 xl:flex xl:justify-center">
            <Tabs defaultValue="skills">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border xl:dark:border ">
                <TabsTrigger className="w-[162px]" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px]" value="qualification">
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px]" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal" style={{ maxWidth: "550px" }}>
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Actively engaged in continuous learning
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      During my tenure in cross-border e-commerce, I developed
                      an interest in web development. Currently, I am
                      self-learning front-end skills.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto mb-4 xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div></div>
                  </div>
                </TabsContent>
                {/* qualification */}
                <TabsContent
                  value="qualification"
                  style={{ maxWidth: "550px" }}
                >
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div>
                      {/* experience */}
                      <div>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase className="mb-4" />
                          <h4 className="capitalize font-medium mb-4">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, duriation } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group bg-orange-100 dark:bg-teal-600			 items-center"
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary dark:bg-primary-foreground absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div className="w-[33%] sm:min-w-[100px] font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className="w-[44%] sm:min-w-[100px] text-lg leading-none text-muted-foreground mb-4  mt-3">
                                    {role}
                                  </div>
                                  <div className="w-[23%] sm:min-w-[100px] text-base font-medium">
                                    {duriation}
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap className="mt-8 mb-4" />
                          <h4 className="capitalize font-medium mt-8 mb-4">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, year } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group bg-orange-100 dark:bg-teal-600	 items-center"
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary dark:bg-primary-foreground  absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div className="w-[33%] sm:min-w-[100px] font-semibold text-xl leading-none mb-2">
                                    {university}
                                  </div>
                                  <div className="w-[44%] sm:min-w-[100px] text-lg leading-none text-muted-foreground mb-4  mt-3">
                                    {qualification}
                                  </div>
                                  <div className="w-[23%] sm:min-w-[100px] text-base font-medium">
                                    {year}
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills" style={{ maxWidth: "550px" }}>
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I am learing and using</h3>
                    {/* skills */}
                    <div>
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <h4 className="capitalize font-medium mb-4">
                          {getData(skillsData, "skills").title}
                        </h4>
                      </div>
                      {/* list */}
                      <div className="flex flex-col gap-y-8">
                        {getData(skillsData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="flex gap-x-8 group bg-orange-100 dark:bg-teal-600 items-center"
                                key={index}
                              >
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary dark:bg-primary-foreground absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div className="font-semibold text-xl leading-none mb-2">
                                  {name}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* language skills */}
                    <div>
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <h4 className="capitalize font-medium mt-8 mb-4">
                          {getData(skillsData, "language skills").title}
                        </h4>
                      </div>
                      {/* list */}
                      <div className="flex flex-col gap-y-8">
                        {getData(skillsData, "language skills").data.map(
                          (item, index) => {
                            const { language, certificate, grade } = item;
                            return (
                              <div
                                className="flex gap-x-8 group bg-orange-100 dark:bg-teal-600 items-center"
                                key={index}
                              >
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary dark:bg-primary-foreground absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div className="w-[25%] sm:min-w-[88px] font-semibold text-xl leading-none mb-2">
                                  {language}
                                </div>
                                <div className="w-[60%] sm:min-w-[200px] text-lg leading-none text-muted-foreground mb-4 mt-3">
                                  {certificate}
                                </div>
                                <div className="w-[15%] sm:min-w-[50px] text-base font-medium">
                                  {grade}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
