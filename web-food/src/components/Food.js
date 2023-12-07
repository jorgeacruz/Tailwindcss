import React, { useState } from "react";
import { data } from '../data/data'

export default function Food(){
    console.log(data)

    const [foods, setFoods] = useState(data);

    // filter type
    function filterType(category){
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

    //filter Price
    function filterPrice(price){
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };




    return(
        <div className="max-w-[1640px] mx-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>

            {/** flter Row */}
            <div className="flex flex-col lg:flex-row justify-between">

                {/** Filter Type */}
                <div>
                    <p className="font-bold text-gray-700">Filter Type</p>
                    <div className="flex justify-between flex-wrap max-w-[480px] w-full gap-2 py-4">
                        <button onClick={() => setFoods(data)} className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">All</button>
                        <button onClick={() => filterType('burger')} className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Burger</button>
                        <button onClick={() => filterType('pizza')} className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Pizza</button>
                        <button onClick={() => filterType('salad')} className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Salads</button>
                        <button onClick={() => filterType('chicken')} className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Chicken</button>
                    </div>
                </div>

                {/** Filter Price */}
                <div>
                    <p className="font-bold text-gray-700 lg:text-right">Filter Price</p>
                    <div className="flex justify-between flex-wrap max-w-[300px] w-full gap-2 py-4">
                         <button onClick={() => filterPrice('$')} className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$</button>
                         <button onClick={() => filterPrice('$$')} className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$</button>
                         <button onClick={() => filterPrice('$$$')} className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$</button>
                         <button onClick={() => filterPrice('$$$$')}className="rounded-md border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$$</button>
                    </div>
                </div>
            </div>

            {/** Display Food list */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {foods.map(( item, index ) => (
                    <div key={index} className="boder shadow-lg rounded-lg hover:scale-105 duration-300">
                        <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-lg"/>
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-bold">{item.name}</p>
                            <p>
                                <span className="bg-orange-500 text-white p-2 rounded-md">{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}               
            </div>
        </div>
    )
}