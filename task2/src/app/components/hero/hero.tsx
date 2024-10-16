import React from "react";
import Image from "next/image";
import shoeImg from "../../assets/image.png";
import logo from "../../assets/logo.png";

const Hero = () => {
  return (
    <>
      <div className="bg-[#54d53e]  h-[100dvh] p-5 flex relative justify-center align-center ">
        <div className=" ml-1 sm:ml-10 top-[-10px] sm:top-[-100px]  absolute ">
          <h1 className=" text-[11rem] sm:text-[22rem] font-bold text-[#9ce78f] italic ">
            NIKE
          </h1>
        </div>

        <Image
          src={shoeImg}
          alt="hero image"
          width={700}
          height={800}
          className=" mr-8 mt-10 sm:mr-16 h-1/2 sm:h-full z-10"
        ></Image>

        <div className="absolute  flex flex-col bottom-[11%] left-10 sm:left-[16%] leading-[4rem] ">
          <Image src={logo} alt="hero image" width={130} height={1500}></Image>
          <p className=" text-[1.5rem] sm:text-[2.5rem] font-bold leading-4">
            JUST DO IT
          </p>
        </div>

        <div className="absolute  flex flex-row  bottom-[30%] sm:bottom-[11%] right-[12%] sm:right-[12%] gap-6 ">
          <div className="  text-[3rem] sm:text-[4rem]  leading-[4rem]  text-[#9ce78f] ">
            <h2>AIR MAX</h2>
            <p>2024</p>
          </div>
          <div className="bg-white h-[7.8rem] w-[8rem] p-2 font-bold">
            <div>
              <h4>AIR MAX</h4>
              <h2>270</h2>
              <h6 className="absolute bottom-9">$ 160</h6>
              <p className="text-[0.8rem] bottom-1 absolute">ADD To Cart</p>
            </div>
            <div className=" h-[6rem] w-[2rem] absolute top-3 right-2">
              <div className="h-4 w-4 bg-[#000000] m-1.5 "></div>
              <div className="h-4 w-4 bg-[#0C07FF] m-1.5 "></div>
              <div className="h-4 w-4 bg-[#EBFF04] m-1.5 "></div>
              <div className="h-4 w-4 bg-[#FF0404] m-1.5 "></div>
              <p className="text-[0.9rem]">SIZE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
