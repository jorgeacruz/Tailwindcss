import React from "react";
import { data } from '../data/data'

export default function Food(){
    console.log(data)
    return(
        <div className="max-w-[1640px] mx-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>

            {/** flter Row */}
            <div className="flex flex-col lg:flex-row justify-between">

                {/** Filter Type */}
                <div>
                    <p className="font-bold text-gray-700">Filter Type</p>
                    <div className="flex justify-between flex-wrap max-w-[480px] w-full gap-2 py-4">
                        <button className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">All</button>
                        <button className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Burger</button>
                        <button className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Pizza</button>
                        <button className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Salads</button>
                        <button className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Chicken</button>
                    </div>
                </div>

                {/** Filter Price */}
                <div>
                    <p className="font-bold text-gray-700 lg:text-right">Filter Price</p>
                    <div className="flex justify-between flex-wrap max-w-[300px] w-full gap-2 py-4">
                         <button className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$</button>
                         <button className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$</button>
                         <button className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$</button>
                         <button className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$$</button>
                    </div>
                </div>
            </div>
        </div>
    )
}