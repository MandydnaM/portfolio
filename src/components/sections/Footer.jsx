import React from 'react'
import navIcon1 from '../../assets/nav-icon1.svg';
import navIcon2 from '../../assets/nav-icon2.svg';
import navIcon3 from '../../assets/nav-icon3.svg';

function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center px-20 bg-white h-20">
            <div className="flex justify-center items-center gap-10">
                <a href="https://github.com/MandydnaM" className='w-8 h-8 bg-gray-400 rounded-full flex justify-center items-center'>
                    <img src={navIcon1} alt="Icon" className='w-5' /></a>
                <a href="https://www.linkedin.com/in/manting-cai-539946356/" className='w-8 h-8 bg-gray-400 rounded-full flex justify-center items-center'>
                    <img src={navIcon2} alt="Icon" className='w-3' /></a>
                <a href="mailto:mantingcaicontact@gmail.com?subject=Contact%20Request" className='w-8 h-8 bg-gray-400 rounded-full flex justify-center items-center'>
                    <img src={navIcon3} alt="Icon" className='w-5' /></a>
            </div>
            <p className='text-gray-400 py-3'>@Developed by Manting Cai</p>
        </footer>
    )
}

export default Footer