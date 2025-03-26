import React, { useState, useEffect } from 'react'

function LoadingScreen({ onComplete }) {
    const [text, setText] = useState("")
    const fullText = "Welcome to my portfolio";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => { onComplete(); }, 1000);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className='fixed inset-0 z-50 bg-white text-blue-400 flex flex-col items-center justify-center'>
            <div className="mb-4 text-xl sm:text-4xl font-mono font-bold">
                {text}
                <span className='animate-blink ml-1'> | </span>
            </div>

            <div className="w-[500px] h-[5px] bg-gray-800 relative overflow-hidden rounded">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                    {""}
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen