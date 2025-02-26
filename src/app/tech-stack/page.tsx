"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

// Function to shuffle an array
const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

interface TechStackProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const TechStack: React.FC<TechStackProps> = ({ darkMode }) => {
  const techs = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    {
      name: "Next.js",
      icon: darkMode ? (
        <SiNextdotjs className="text-white transition-colors" />
      ) : (
        <TbBrandNextjs className="transition-colors" />
      ),
    },
    {
      name: "Express.js",
      icon: (
        <SiExpress className="bg-gray-500 p-1 dark:text-white transition-colors" />
      ),
    },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "PHP", icon: <FaPhp className="text-purple-600" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
    { name: "C", icon: <SiC className="text-blue-600" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
  ];

  // Create shuffled techs array on client side
  const [shuffledTechs, setShuffledTechs] = useState<any[]>([]);
  const [shuffledTechs1, setShuffledTechs1] = useState<any[]>([]);
  const [shuffledTechs2, setShuffledTechs2] = useState<any[]>([]);
  const [shuffledTechs3, setShuffledTechs3] = useState<any[]>([]);

  useEffect(() => {
    // Shuffle the arrays only once when component is mounted on the client
    setShuffledTechs(shuffleArray([...techs]));
    setShuffledTechs1(shuffleArray([...techs]));
    setShuffledTechs2(shuffleArray([...techs]));
    setShuffledTechs3(shuffleArray([...techs]));
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-sm lg:text-2xl font-bold text-center mb-6">
        Tech Stack and languages I&apos;m comfortable with...
      </h2>

      {/* Swiper for infinite scrolling */}
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        speed={3000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        className="swiper-container"
      >
        {techs.concat(techs).map((tech, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-5xl">{tech.icon}</div>
              <p className="text-sm font-medium">{tech.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <br />

      {/* Second Swiper with shuffled techs */}
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        speed={3000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        style={{ direction: "rtl" }}
        className="swiper-container"
      >
        {shuffledTechs.concat(shuffledTechs).map((tech, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-5xl">{tech.icon}</div>
              <p className="text-sm font-medium">{tech.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <br />

      {/* Third Swiper with shuffled techs */}
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        speed={3000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        className="swiper-container"
      >
        {shuffledTechs1.concat(shuffledTechs1).map((tech, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-5xl">{tech.icon}</div>
              <p className="text-sm font-medium">{tech.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <br />

      {/* Fourth Swiper with shuffled techs */}
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        speed={3000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        style={{ direction: "rtl" }}
        className="swiper-container"
      >
        {shuffledTechs2.concat(shuffledTechs2).map((tech, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-5xl">{tech.icon}</div>
              <p className="text-sm font-medium">{tech.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechStack;
