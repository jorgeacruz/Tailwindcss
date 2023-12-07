import React from "react";

export default function Hero() {
    return(
        <div className='max-w-[1640px] mx-auto p-4 rounded-lg hover:scale-105 duration-300'>
        <div className='max-h-[500px] relative rounded-lg'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center rounded-lg'>
                <h1 className='px-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Bar <span className='text-orange-500'>Restaurante</span></h1>
                <h1 className='px-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Choperia </span> Esperança</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover rounded-lg' src="https://img.freepik.com/free-photo/close-up-italian-pizza-about-cheese-it-stick-selective-focus-generative-ai_1258-153039.jpg?w=1380&t=st=1701876715~exp=1701877315~hmac=998da8bcd22c2a21281c76dfbc9509f4f3a0c1f881464607f20c67f059ac1f5a=2" alt="/" />
        </div>
    </div>
    )
}