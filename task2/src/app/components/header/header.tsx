import React from 'react'
import Image from 'next/image'
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <>
    <div className='bg-[#5ff62c]  h-24 p-5 flex '>
        <div>
            <Image src={logo} alt="hero image" width={100} height={5000} ></Image>
        </div>
        <div className=' ml-10'>
            <ul>
                <li>Found a Store</li>
                <li>About Us</li>
            </ul>
        </div>

    </div>
      
    </>
  )
}

export default Header
