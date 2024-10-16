import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="bg-[#5ff62c] flex flex-row h-24 p-5 ">
        <div>
          <Image src={logo} alt="hero image" width={90} height={40}></Image>
        </div>
        <div className="ml-[20%] sm:ml-[38%] mt-4">
          <ul className="flex  gap-6 justify-center items-center  font-bold">
            <li>Found a Store</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
