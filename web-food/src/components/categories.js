import React from "react";
import { categories } from "../data/data";

export default function Categories(){
    console.log(categories);

    return(
        <div className="max-w-[1640px] mx-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-center text-4xl py-8">Top Rated Menu Items</h1>
            {/** Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                { categories.map((i, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg flex justify-between items-center p-4 hover:bg-orange-600 duration-200 hover:text-white">
                        <h2 className="font-bold sm:text-xl">{i.name}</h2>
                        <img src={i.image} alt={i.name}  className="w-20"/>
                    </div>    
                ))}
            </div>
        </div>
    )
}