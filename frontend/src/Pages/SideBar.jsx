import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { AiFillHome } from "react-icons/ai";
import { IoCartSharp } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
const SideBar = () => {
  return (
    <Sidebar className='mx-6 h-screen'>
        <Menu className='mb-4 text-2xl'>Menu</Menu>
    <Menu>
  <div className='flex items-center gap-2 my-2 text-xl mr-16 py-1 px-2 rounded-md'>
    <AiFillHome/>
    <span>Store</span>
  </div>
  <div className='flex items-center gap-2 my-2 text-xl  mr-16 py-1 px-2 rounded-md'>
    <IoCartSharp/>
    <span>Cart</span>
  </div>
  <div className='flex items-center gap-2 my-2 text-xl  mr-16 py-1 px-2 rounded-md'>
    <MdFavorite/>
    <span>Wishlist</span>
  </div>
    </Menu>
  </Sidebar>
  )
}

export default SideBar