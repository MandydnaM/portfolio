import React, { useEffect } from 'react'
import burger from '../assets/burger.svg';

function Navbar({ menuOpen, setMenuOpen }) {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-white backdrop-blur-lg 
        border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className='font-mono text-xl font-bold text-black'>
                        {" "}
                        Manting <span className="text-blue-500">Cai</span>
                        {" "}
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => { setMenuOpen(prev => !prev) }}>
                        <img src={burger} />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-blue-400 hover:text-black transition-colors">
                            {" "}Home{" "}
                        </a>
                        <a href="#about" className="text-blue-400 hover:text-black transition-colors">
                            {" "}About{" "}
                        </a>
                        <a href="#projects" className="text-blue-400 hover:text-black transition-colors">
                            {" "}Projects{" "}
                        </a>
                        <a href="mailto:mantingcaicontact@gmail.com?subject=Contact%20Request" className="text-blue-400 hover:text-black transition-colors">
                            {" "}Contact{" "}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar