import Switch from "../switch/page"
function Navbar ({darkMode , setDarkMode})  {
    return (
        <header
                  className={`py-4 glass ${
                    darkMode ? "bg-blue-800 text-white" : "bg-blue-600 text-white"
                  }`}
                >
                  <div className="container mx-auto px-6 flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Mahe Alif's Portfolio</h1>
                    {/* <button
                      onClick={() => setDarkMode(!darkMode)}
                      className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded"
                    >
                      {darkMode ? "Light Mode" : "Dark Mode"}
                    </button> */}
        
                    {/* Darkmode and lightmode toggle */}
                    <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
                  </div>
                  
                </header>
    )
}
export default Navbar