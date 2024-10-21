import Image from "next/image";
import image1 from "../../../public/images/nikoncover1.jpg";
import image2 from "../../../public/images/nikoncover2.jpg";
import image3 from "../../../public/images/nikoncover3.jpg";

const Header = () => {
  return (
    <>
      <div className="flex  h-dvh bg-white">
        <div className=" w-[33%] flex-grow-1">
          {" "}
          <Image
            src={image1}
            alt="heropic"
            height={1000}
            width={1000}
            className="h-dvh"
          />
        </div>
        <div className=" w-[33%] flex-grow-1">
          {" "}
          <Image
            src={image2}
            alt="heropic2"
            height={100}
            width={1000}
            className="h-dvh"
          />
        </div>
        <div className=" w-[33%] flex-grow-1">
          {" "}
          <Image
            src={image3}
            alt="heropic3"
            height={1000}
            width={1000}
            className="h-dvh"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
