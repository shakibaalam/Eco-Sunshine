import React from 'react';
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { GrLinkedinOption } from "@react-icons/all-files/gr/GrLinkedinOption";
import { GrSkype } from "@react-icons/all-files/gr/GrSkype";
import { GrTwitter } from "@react-icons/all-files/gr/GrTwitter";
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'

const Navbar = () => {
    return (
        <div className=''>
            <div className=' flex justify-between lg:mx-44 py-5'>
                <div className=' flex items-center gap-5'>
                    <img className='w-16 h-16 rounded-full' src={logo} alt="" />
                    <h1 className='text-3xl  font-bold '>ECO <span className='text-primary'>SUNSHINE</span></h1>
                    <span className=' flex items-center gap-2 border-l-2 pl-2 border-[#7abf18]'>
                        <BsSearch  className='text-primary'/>
                        <input type="text" placeholder="i'm searching for..." value="i'm searching for..." defaultValue="i'm searching for" className='px-2 border-none'/>
                    </span>
                </div>
                <div className=' flex items-center gap-5 text-[#777] cursor-pointer'>
                    <div className=' flex items-center gap-5 border-l-2 border-r-2 px-2 border-[#7abf18]'>
                        <FaFacebookF className=' hover:text-[#7abf18]'/>
                        <GrLinkedinOption className=' hover:text-[#7abf18]'/>
                        <GrSkype className=' hover:text-[#7abf18]'/>
                        <GrTwitter className=' hover:text-[#7abf18]'/>
                    </div>
                    <span>
                        <FaShoppingCart className=' hover:text-[#7abf18]'/>
                    </span>
                </div>
            </div>
            <nav className=' bg-[#7abf18] uppercase lg:mx-44 py-4 text-white flex justify-around items-center relative z-10'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/events'>Events</Link>
                <Link to='/campaign'>Campaign & Causes</Link>
                <Link to='/product'>Shop</Link>
                <button className=' bg-white rounded-lg uppercase text-primary px-8 py-2 hover:bg-black'>Donate</button>
            </nav>
        </div>
    );
};

export default Navbar;