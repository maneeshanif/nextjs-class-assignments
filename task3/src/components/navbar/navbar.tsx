import React from "react";
import Logo from "../../../public/images/nikonlogo.svg"
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black/60 w-full h- fixed top-0 z-10 ">
       <div>
         <Image src={Logo} alt="logo" width={70} height={70} className="mx-[7rem] mt-6 pb-5" />
       </div>
      </nav>
    </>
  );
};

export default Navbar;
