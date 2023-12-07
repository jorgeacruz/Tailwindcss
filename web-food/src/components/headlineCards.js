import React from "react";

export default function HeadlineCards(){
    return(
        <div className="max-w-[1640px] mx-auto p-2 my-12 grid md:grid-cols-3 gap-6">
            {/** Cards */}
            <div className="rounded-xl relative">
                {/** Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white hover:bg-black/20 duration-300">
                    <p className="font-bold text-2xl px-2 pt-4">Suns Out, Bogog</p>
                    <p className="px-2">Through 8/26</p>
                    <button className="bg-black mx-2 absolute bottom-4 hover:bg-white duration-300 hover:text-black"> Order Now</button>
                </div>
                <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" className="rounded-xl max-h-[250px] w-full object-cover"/>
            </div>
            <div className="rounded-xl relative">
                {/** Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white hover:bg-black/20 duration-300">
                    <p className="font-bold text-2xl px-2 pt-4">Suns Out, Bogog</p>
                    <p className="px-2">Through 8/26</p>
                    <button className="bg-black mx-2 absolute bottom-4 hover:bg-white duration-300 hover:text-black"> Order Now</button>
                </div>
                <img src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" className="rounded-xl max-h-[250px] w-full object-cover"/>
            </div>
            <div className="rounded-xl relative ">
                {/** Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white hover:bg-black/20 duration-300">
                    <p className="font-bold text-2xl px-2 pt-4">Suns Out, Bogog</p>
                    <p className="px-2">Through 8/26</p>
                    <button className="bg-black mx-2 absolute bottom-4 hover:bg-white duration-300 hover:text-black"> Order Now</button>
                </div>
                <img src="https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" className="rounded-xl max-h-[250px] w-full object-cover"/>
            </div>
        </div>
    )
}