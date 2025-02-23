import React, { useState, useEffect } from "react";

function Bento() {
  const [darkMode, setDarkMode] = useState(false);

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
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <header
          className={`py-4 ${
            darkMode ? "bg-blue-800 text-white" : "bg-blue-600 text-white"
          }`}
        >
          <div className="container mx-auto px-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold">Mahe Alif's Portfolio</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* About Me */}
            <div
              className={`lg:col-span-2 p-3 lg:p-5 rounded-lg shadow-md  overflow-hidden ${
                darkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-white text-gray-700"
              }`}
            >
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <div className="flex flex-col lg:flex-row w-full gap-2 p-2">
                <div className="lg:w-1/2 flex justify-center gap-4 lg:justify-start relative">
                  <div className="animated-border-2"></div>
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQENG5Gtw56d3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731582396563?e=1741824000&v=beta&t=WNh1_L_r2SFtYR6T3f6FtZO4_T6wx_N0bdClW8_eVEQ"
                    alt="Mahe Alif"
                    className="w-full rounded-xl shadow-lg "
                  />
                </div>
                <p className="lg:w-fit p-2">
                  Hi! I'm Mahe Alif, a Computer Science & Engineering student at
                  United International University. I have experience in the MERN
                  stack, React, Python, and database management.
                  <br />
                  Currently, I’m studying Computer Science and Engineering at
                  United International University. Like many developers, I began
                  with the MERN stack as my foundation, and I’m eager to keep
                  building on my skills and expanding my expertise. With
                  dedication and enthusiasm, I’m excited to make a meaningful
                  impact in software engineering.
                </p>
              </div>
            </div>

            {/* Projects */}
            <div
              className={`rounded-lg p-6 shadow-md relative overflow-hidden ${
                darkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-white text-gray-700"
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
                  <strong>Project 2:</strong> Here is a Github repo containing
                  some algorithms on AI.{" "}
                  <a
                    href="https://github.com/MaheAlif/AiLabAlgorithms"
                    className="text-teal-400"
                  >
                    click here !!
                  </a>
                </li>
                <li className="mb-2">
                  <strong>Project 3:</strong> They are on the way...
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div
              className={`rounded-lg p-6 shadow-md relative overflow-hidden ${
                darkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-white text-gray-700"
              }`}
            >
              <div className=""></div>
              <h2 className="text-xl font-bold mb-4">Contact</h2>
              <p>Connect with me:</p>
              <ul className="list-disc ml-6 mt-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/mahe-alif-3483b9170/"
                    className="text-blue-500 dark:text-blue-300 hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/MaheAlif"
                    className="text-blue-500 dark:text-blue-300 hover:underline"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
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
