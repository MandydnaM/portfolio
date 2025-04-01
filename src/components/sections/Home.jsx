import React from 'react'
import RevealOnScroll from "../RevealOnScroll";
import headerImg from "../../assets/portrait.jpg";
import navIcon1 from '../../assets/nav-icon1.svg';
import navIcon2 from '../../assets/nav-icon2.svg';
import navIcon3 from '../../assets/nav-icon3.svg';
import rightArrow from '../../assets/right-arrow.svg';

function Home() {
    return (
        <section id='home' className='min-h-screen flex items-center justify-center mt-15 sm:mt-10 bg-white'>
            <RevealOnScroll>
                {/* 新增外层 flex 容器 */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
                    {/* 文字内容区块 */}
                    <div className='text-center md:text-left max-w-xl md:basis-1/2'>
                        <h1 className='text-3xl sm:text-5xl font-bold bg-gradient-to-r from-blue-300 to-sky-600 bg-clip-text text-transparent'>
                            Hallo, ich bin
                        </h1>
                        <h1 className='text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-sky-600 bg-clip-text text-transparent'>
                            Manting Cai
                        </h1>

                        <p className='text-gray-600 text-lg mb-4 leading-relaxed max-w-[95%] mx-auto md:mx-0'>
                            Ich bin ein leidenschaftlicher Entwickler, und derzeit absolviere ich meinen Master in Informationssysteme.
                        </p>
                        <p className='text-gray-600 text-lg mb-6 sm:mb-8 leading-relaxed max-w-[95%] mx-auto md:mx-0'>
                            Vor meinem Masterstudium habe ich drei Jahre lang in IT gearbeitet, wo ich wertvolle Erfahrungen in Teamarbeit, Softwareentwicklung, Projektmanagement sammeln konnte.
                        </p>

                        <div className="social-icon flex sm:flex-row gap-3 sm:gap-7 justify-center ">


                            <a href="https://github.com/MandydnaM" className='flex justify-center items-center gap-1 px-2 rounded-3xl w-10 h-10 sm:w-30 sm:h-12 bg-blue-300 hover:-translate-y-1 transition-all shadow-lg'>
                                <img src={navIcon1} className='w-8' />
                                <p className='hidden sm:block text-1 font-black-500 text-center '>Github</p>
                            </a>
                            <a href="https://www.linkedin.com/in/manting-cai-539946356/" className='flex justify-center items-center gap-1 px-2 rounded-3xl w-10 h-10 sm:w-30 sm:h-12 bg-blue-400 hover:-translate-y-1 transition-all shadow-lg'>
                                <img src={navIcon2} className='w-5' />
                                <p className='hidden sm:block text-l font-black-500 text-center '>Linkedin</p>
                            </a>
                            <a href="mailto:mantingcaicontact@gmail.com?subject=Contact%20Request" className='flex justify-center items-center gap-2 px-2 rounded-3xl w-10 h-10 sm:w-30 sm:h-12 bg-blue-500 hover:-translate-y-1 transition-all shadow-lg'>
                                <img src={navIcon3} className='w-7' />
                                <p className='hidden sm:block text-l font-black-500 text-center '>Mail</p>
                            </a>


                            <a href="#projects" className='flex justify-center items-center gap-2 px-2 rounded-3xl w-40 sm:w-50 h-12 text-black hover:bg-blue-500 hover:-translate-y-1 transition-all '>
                                <img src={rightArrow} className='w-8 sm:w-10' />
                                <p className='text-sm'>View projects</p>
                            </a>

                        </div>
                    </div>

                    {/* 图片区块 */}
                    <div className="md:basis-1/2 lg:block hidden">
                        <img
                            src={headerImg}
                            alt="Header Img"
                            className='rounded-full object-cover shadow-xl w-[90%] max-w-md'
                        />
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default Home