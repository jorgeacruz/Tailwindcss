import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaWallet, FaUserFriends } from 'react-icons/fa'
import { TbTruckDelivery } from 'react-icons/tb'


export default function NavBar() {

    const [nav, setNav] = useState(false);

 return (
   <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
    {/** Left side */}
    <div className="flex items-center"> 
        <div onClick={() => setNav(!nav)} className="cursor-pointer dark:bg-black">
            <AiOutlineMenu size={32} color={'#fff'}/>
        </div>
        <h1 className="text-2xl sm?text-3xl md:text-4xl px-2 text-white dark:text-black">
            Bar <span className="font-bold text-orange-600"> Esperança</span>
        </h1>

        {/** Button Delivery 
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]"> 
            <p className="bg-black text-white rounded-full p-2">Delivery</p>
            <p className="p-2">Pickup</p>
        </div>
         */}
    </div>
        {/** Search input
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm?w-[400px] lg:w-[500px]">
            <AiOutlineSearch size={25}/>
            <input type="text" placeholder="Search foods" className="bg-transparent p-2 focus:outline-none w-full"/>
        </div>
         */}
        {/** Cart Buttom */}
        <button className="bg-white text-black hidden md:flex items-center py-2 rounded-full">
            <BsFillCartFill size={25} className="mr-2"/> Cart
        </button>

        {/** mobile menu */}
        {/** Ovelay */}
        {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 letf-0">
        </div> : '' }
        
        {/** side drawer menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen z-10 bg-white duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen z-10 bg-white duration-300'}>
           <AiOutlineClose size={30} className="absolute right-4 top-4 cursor-pointer" onClick={() => setNav(!nav) } />
           <h2 className="text-2xl p-4">Best <span className="font-bold">Eat</span></h2>
           <nav>
            <ul className="text-black flex flex-col p-4 ">
                <li className="text-xl py-4 flex">
                    <TbTruckDelivery className="mr-4"/>Orders
                </li>
                <li className="text-xl py-4 flex">
                    <MdFavorite className="mr-4"/>Favorites
                </li>
                <li className="text-xl py-4 flex">
                    <FaWallet className="mr-4"/>Wallet
                </li>
                <li className="text-xl py-4 flex">
                    <MdHelp className="mr-4"/>Help
                </li>
                <li className="text-xl py-4 flex">
                    <AiFillTag className="mr-4"/>Promotions
                </li>
                <li className="text-xl py-4 flex">
                    <BsFillSaveFill className="mr-4"/>Best Ones
                </li>
                <li className="text-xl py-4 flex">
                    <FaUserFriends className="mr-4"/>Invite Friends
                </li>
            </ul>
           </nav>
        </div>
    </div>
  );
}