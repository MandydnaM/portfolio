import React from 'react'
import RevealOnScroll from "../RevealOnScroll";

function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20 bg-white"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        My Projects
                    </h2>
                    <div className="flex flex-col gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2 text-black"> Smart Energy Dashboard</h3>
                            <p className="text-gray-400 mb-4">
                                a responsive web-based application designed to monitor and analyze energy consumption in real time.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "TypeScript", "Material UI", "Recharts", "Express", "Vite"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://MandydnaM.github.io/smart-energy-dashboard"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    go to website →
                                </a>
                            </div>
                        </div>
                        <div
                            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2 text-black">Nutricare Website</h3>
                            <p className="text-gray-400 mb-4">
                                a responsive web application designed to showcase NutriCare’s nutrition consulting services.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Google Maps API", "Webpack"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://MandydnaM.github.io/NutriCare"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    go to website →
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}

export default Projects