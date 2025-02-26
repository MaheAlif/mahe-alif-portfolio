"use client";
import React, { useState, useEffect } from "react";
import TechStack from "../tech-stack/page";
import Navbar from "../navbar/page";
import Footer from "@/app/footer/page";
import { FaLinkedin, FaGithub, FaArrowAltCircleDown } from "react-icons/fa";

function Bento() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <div
        className={`min-h-screen font-sans ${
          darkMode ? "bg-gray-900 text-white" : "bg-slate-200 text-black"
        }`}
      >
        {/* Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>

        <main className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* About Me */}
            <div
              className={`lg:col-span-2 p-3 lg:p-5 rounded-lg shadow-md  overflow-hidden ${
                darkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-slate-100 text-gray-700"
              }`}
            >
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <div className="flex flex-col lg:flex-row w-full gap-5 p-2">
                <div className="lg:w-1/2 flex justify-center lg:justify-start ">
                  <div className=""></div>
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQENG5Gtw56d3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731582396563?e=1741824000&v=beta&t=WNh1_L_r2SFtYR6T3f6FtZO4_T6wx_N0bdClW8_eVEQ"
                    alt="Mahe Alif"
                    className="w-full rounded-xl shadow-lg "
                  />
                </div>
                <p className="lg:w-fit  p-2">
                  Hi! I&apos;m Mahe Alif, a Computer Science & Engineering student at
                  United International University. I have experience in the MERN
                  stack, React, Python, and database management.
                  <br />
                  Currently, I&apos;m studying Computer Science and Engineering at
                  United International University. Like many developers, I began
                  with the MERN stack as my foundation, and I&apos;m eager to keep
                  building on my skills and expanding my expertise. With
                  dedication and enthusiasm, I&apos;m excited to make a meaningful
                  impact in software engineering.
                  <br />
                  But recently, I&apos;ve picked a keen interest in AI and Machine
                  Learning. Though right now my knowledge-base is lacking, I&apos;m
                  determined to get myself upto speed with effort and a not-lackluster
                   motivation!!!
                </p>
              </div>
            </div>

            {/* Projects */}
            <div
              className={`rounded-lg p-6 shadow-md relative overflow-hidden ${
                darkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-slate-100 text-gray-700"
              }`}
            >
              <div className="animated-border"></div>
              <h2 className="text-xl font-bold mb-4">Projects</h2>
              <ul>
                <li className="mb-2">
                  <strong>Project 1:</strong> A word guessing game. <br />
                  Here is the link{" "}
                  <a
                    className="text-orange-400"
                    href="https://mahealif.github.io/Word-Guess-Game/"
                  >
                    click here !
                  </a>
                </li>
                <li className="mb-2">
                  <strong>Project 2:</strong> A Github repo containing some
                  algorithms on AI.{" "}
                  <a
                    href="https://github.com/MaheAlif/AiLabAlgorithms"
                    className="text-teal-400"
                  >
                    click here !!
                  </a>
                </li>
                <li className="mb-2">
                  <strong>Project 3:</strong> They are curently under
                  development...
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div
              className={`flex flex-col gap-5 rounded-lg p-6 shadow-md relative overflow-hidden ${
                darkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-slate-100    text-gray-700"
              }`}
            >
              <div className=""></div>
              <h2 className="text-xl font-bold mb-4">Contact</h2>
              <p className="text-xl">Connect with me:</p>
              <div className="flex mt-5 gap-5">
                <a
                  href="https://www.linkedin.com/in/mahe-alif-3483b9170/"
                  className="text-blue-500 dark:text-blue-300 hover:underline"
                >
                  <FaLinkedin
                    className={`text-7xl ${
                      darkMode ? "text-white" : "text-blue-500"
                    }`}
                  />
                </a>

                <a
                  href="https://github.com/MaheAlif"
                  className="text-blue-500 dark:text-blue-300 hover:underline"
                >
                  <FaGithub
                    className={`text-7xl ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  />
                </a>
              </div>
              {/* Email address */}
              <div className="flex flex-col gap-5">
                <p className="flex gap-5 text-xl">
                  Get my email <FaArrowAltCircleDown className="mt-1" />
                </p>
                <div className="diff aspect-[21/9]">
                  <div className="diff-item-1">
                    <div className="bg-primary text-primary-content grid place-content-center text-xl lg:text-2xl font-black">
                      maheejaman16@gmail.com
                    </div>
                  </div>
                  <div className="diff-item-2">
                    <div className="bg-base-200 grid place-content-center text-5xl text-white">
                      Mahe Alif
                    </div>
                  </div>
                  <div className="diff-resizer"></div>
                </div>
              </div>
            </div>

            {/* New section */}
            <div
              className={`lg:col-span-2 rounded-lg p-2 shadow-md relative overflow-hidden ${
                darkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-slate-100    text-gray-700"
              }`}
            >
              <TechStack darkMode={darkMode} /> {/* Tech Stack Section */}
            </div>
          </div>
        </main>
        {/* Footer */}
        {/* Footer Section */}
        <div
          className={`w-full p-5 mx-auto text-center ${
            darkMode ? "bg-gray-600 text-white" : "bg-slate-300 text-black"
          }`}
        >
          <Footer />
        </div>
      </div>

      <style jsx>{`
        @keyframes rgb-border {
          0% {
            border-color: red;
          }
          25% {
            border-color: yellow;
          }
          50% {
            border-color: cyan;
          }
          75% {
            border-color: lime;
          }
          100% {
            border-color: red;
          }
        }
        .animated-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 3px solid;
          border-radius: 8px;
          animation: rgb-border 3s linear infinite;
          pointer-events: none;
        }

        @keyframes rgb-border-2 {
          0% {
            border-color: red yellow;
          }
          25% {
            border-color: red;
          }
          50% {
            border-color: lime;
          }
          75% {
            border-color: cyan;
          }
          100% {
            border-color: green;
          }
        }

        .animated-border-2 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 3px solid;
          border-radius: 8px;
          animation: rgb-border-2 3s linear infinite;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}

export default Bento;
