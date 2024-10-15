import React from 'react'
import Image from 'next/image'
import shoeImg from '../../assets/image.png'

const Hero = () => {
  return (
    <>
    <div className='bg-[#54d53e]  h-[100vh] p-5 flex relative justify-center align-center '>


      <div className='ml-10 top-[-100px]  absolute '>

      <h1 className=' text-[22rem] font-bold text-[#9ce78f] '>NIKE</h1>
      </div>

      <Image src={shoeImg} alt="hero image" width={700} height={800} className=' mr-16  z-10'></Image>

      <div className='absolute text-[3rem] bottom-[20%] right-[25%] leading-[3rem]  text-[#9ce78f] ' >
        <h2>AIR MAX</h2>
        <p>2024</p>
      </div>

    </div>
      
    </>
  )
}

export default Hero
