import React from "react";
import Logo from "../../../public/images/nikonlogo.svg"
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black/60 w-full  fixed top-0 z-10 ">
       <div>
         <Image src={Logo} alt="logo" width={70} height={70} className="mx-[7rem] mt-6 pb-5" />
       </div>
       <div className="text-xl text-white  flex  gap-10  px-96   ">
        <Link href="/" >Business</Link>
        <Link href="/" >Consumer</Link>
        <Link href="/" >About Us</Link>
       </div>
      </nav>
    </>
  );
};

export default Navbar;
