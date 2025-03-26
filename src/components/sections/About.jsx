import React from 'react'
import RevealOnScroll from "../RevealOnScroll";

function About() {
    const frontendSkills = [
        "html",
        "css",
        "React",
        "ES6",
        "Express",
        "Axios",
        "Promise",
        "TypeScript",
        "TailwindCSS",
        "Material UI",
    ];

    const backendSkills = ["Node.js", "Flask", "SQL", "MongoDB"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20 bg-blue-100"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        About Me
                    </h2>

                    <div className="rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-black mb-6 text-center">
                            Ich verfüge über grundlegende Programmiererfahrung in C, Python, Java, JavaScript usw. und beherrsche HTML5, React, REST-APIs und andere Technologien.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="bg-white rounded-xl p-6 hover:-translate-y-1 transition-all shadow-lg">
                                <h3 className="text-xl font-bold text-black mb-4"> Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 hover:-translate-y-1 transition-all shadow-lg">
                                <h3 className="text-xl text-black font-bold mb-4"> Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>



                    <div>
                        <div className="relative max-w-2xl mx-auto my-8">
                            {/* 时间轴垂直线 */}
                            <div className="absolute left-1/2 w-1 h-full bg-white -translate-x-1/2"></div>

                            {/* 时间轴项容器 */}
                            <div className="space-y-8">
                                {/* 时间轴项 1 */}
                                <div className="relative flex items-center gap-6">
                                    {/* 时间节点圆点 */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 z-10 shadow-lg"></div>

                                    {/* 左侧内容 */}
                                    <div className="w-1/2 pr-12 text-right">
                                        <time className="text-gray-500">2021</time>
                                        <h3 className="text-xl font-semibold mt-2 text-blue-500">obtained bachelor's degree</h3>
                                        <p className="text-gray-600 mt-1">in information system</p>
                                        <p className="text-gray-600 mt-1">from University of International Business and Economics</p>
                                    </div>

                                    {/* 右侧占位 */}
                                    <div className="w-1/2"></div>
                                </div>

                                {/* 时间轴项 2 */}
                                <div className="relative flex items-center gap-6">
                                    <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-300 z-10 shadow-lg"></div>

                                    {/* 右侧内容 */}
                                    <div className="w-1/2 pl-12"></div>

                                    {/* 左侧占位 */}
                                    <div className="w-1/2"><time className="text-gray-500">2021-2024</time>
                                        <h3 className="text-xl font-semibold mt-2 text-blue-500">worked as research assist</h3>
                                        <p className="text-gray-600 mt-1">at National Engineering Research Center for Digital Life</p>
                                        <p className="text-gray-600 mt-1">in Sun Yat-Sen University</p>
                                    </div>

                                </div>
                            </div>

                            {/* 时间轴项 3 */}
                            <div className="relative flex items-center gap-6">
                                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 z-10 shadow-lg"></div>

                                <div className="w-1/2 pr-12 text-right">
                                    <time className="text-gray-500">2024-now</time>
                                    <h3 className="text-xl font-semibold mt-2 text-blue-500">studying for master's degree</h3>
                                    <p className="text-gray-600 mt-1">in information system</p>
                                    <p className="text-gray-600 mt-1">from FAU Erlangen-Nürnberg</p>
                                </div>

                                <div className="w-1/2"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </RevealOnScroll>
        </section >
    );
}

export default About