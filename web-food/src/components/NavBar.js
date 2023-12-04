import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'

export default function NavBar() {
 return (
   <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
    {/** Left side */}
    <div className="flex items-center"> 
        <div className="cursor-pointer">
            <AiOutlineMenu size={32} />
        </div>
        <h1 className="text-2xl sm?text-3xl md:text-4xl px-2">
            Best <span className="font-bold"> Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]"> 
            <p className="bg-black text-white rounded-full p-2">Delivery</p>
            <p className="p-2">Pickup</p>
        </div>
    </div>
        {/** Search input */}
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm?w-[400px] lg:w-[500px]">
            <AiOutlineSearch size={25}/>
            <input type="text" placeholder="Search foods" className="bg-transparent p-2 focus:outline-none w-full"/>
        </div>
        {/** Cart Buttom */}
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
            <BsFillCartFill size={25} className="mr-2"/> Cart
        </button>

        {/** mobile menu */}
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 letf-0">
        </div>
        {/** side drawer menu */}
        <div className="fixed top-0 left-0 w-[300px] h-screen z-10 bg-white duration-300">
           <AiOutlineClose size={30} className="absolute right-4 top-4 cursor-pointer" />
           <h2 className="text-2xl p-4">Best <span className="font-bold">Eat</span></h2>
           <nav>
            <ul className="text-black">
                <li><TbTruckDelivery/>Orders</li>
            </ul>
           </nav>
        </div>
    </div>
  );
}