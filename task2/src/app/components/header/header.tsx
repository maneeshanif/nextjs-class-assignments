import React from 'react'
import Image from 'next/image'
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <>
    <div className='bg-[#5ff62c]  h-24 p-5 flex flex-row'>
        <div>
            <Image src={logo} alt="hero image" width={90} height={90} ></Image>
        </div>
        <div className=' ml-[40%] '>
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
