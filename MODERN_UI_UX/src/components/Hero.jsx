import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CodeExamples, floatingCards } from "../data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("App.jsx");
  const currentFloatingCard = floatingCards[activeTab];

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* GLOW EFFECTS */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px,  rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="MAINDIV max-w-7xl mx-auto text-center relative w-full">
        <div className="MAINDIV max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center relative">

          {/* HEADING SECTION */}
          <div>
            <div>
              
            </div>
          </div>
          {/* CODE SECTION */}
          <div className="relative order-2 w-full">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
              <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5">
                {/* IDE HEADER */}
                <div className="(main) flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border-b border-b-white/10 backdrop-blur-sm">
                  <div className="(buttons) flex gap-1 sm:gap-2 items-center">
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                    <span className="text-xs sm:text-sm text-gray-300 ">
                      CodeFlow AI
                    </span>
                  </div>
                  <div className="(arrow)">
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 " />
                  </div>
                </div>

                {/* CODE PART */}
                <div className="p-3 sm:p-4 relative h-full">
                  {/* file tabs */}
                  <div className="flex gap-1 sm:gap-2 mb-3 sm:mb-4 overflow-x-auto">
                    <button
                      onClick={() => setActiveTab("App.jsx")}
                      className={`py-2 px-3 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                        activeTab === "App.jsx"
                          ? "bg-blue-500/30 text-white border-blue-400/20"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      } transition-all duration-200 whitespace-nowrap`}
                    >
                      App.jsx
                    </button>

                    <button
                      onClick={() => setActiveTab("Hero.jsx")}
                      className={`py-2 px-3 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                        activeTab === "Hero.jsx"
                          ? "bg-blue-500/30 text-white border-blue-400/20"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      } transition-all duration-200 whitespace-nowrap`}
                    >
                      Hero.jsx
                    </button>

                    <button
                      onClick={() => setActiveTab("Navbar.jsx")}
                      className={`py-2 px-3 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                        activeTab === "Navbar.jsx"
                          ? "bg-blue-500/30 text-white border-blue-400/20"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      } transition-all duration-200 whitespace-nowrap`}
                    >
                      Navbar.jsx
                    </button>
                  </div>

                  {/* code-content */}
                  <div className="relative overflow-hidden flex-grow">
                    <SyntaxHighlighter
                      language="javascript"
                      style={nightOwl}
                      customStyle={{
                        margin: 0,
                        borderRadius: "8px",
                        fontSize: "11px",
                        lineHeight: "1.4",
                        height: "100%",
                        border: "1px solid #3c3c3c",
                      }}
                    >
                      {CodeExamples[activeTab]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>

              {/* floating-cards */}
              <div
                className={`hidden lg:block absolute right-4 bottom-4 transfrom translate-x-8 translate-y-8 w-72 ${currentFloatingCard.bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-6 h-6 ${currentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold`}
                  >
                    {currentFloatingCard.icon}
                  </div>
                  <span
                    className={`text-sm font-medium ${currentFloatingCard.textColor}`}
                  >
                    {currentFloatingCard.title}
                  </span>
                </div>
                <div
                  className={`text-sm text-left ${currentFloatingCard.contentColor}`}
                >
                  {currentFloatingCard.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
