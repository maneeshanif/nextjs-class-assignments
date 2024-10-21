import React from "react";
import Image from "next/image";
import image1 from "../../../public/images/pic_vision1.jpg";
import image2 from "../../../public/images/pic_vision-movie.jpg";
import image3 from "../../../public/images/pic_sustainability2024.jpg";
import image4 from "../../../public/images/pic_companyprofile.jpg";

const Vision = () => {
  return (
    <>
      <div className=" h-[240vh]  bg-[#f3f3f3]">
        <div className=" flex justify-center align-center">
        <div className=" h-48 w-[44%] pt-20 ">
          <h1 className="text-4xl font-bold text-center ">Vision 2030</h1>{" "}
          <br />
          <p className="text-2xl font-bold text-center">
            A key technology solutions company in a global society
          </p>
          <p className="text-2xl font-bold text-center">
            where humans and machines co-create seamlessly
          </p>
          <br />
          <h4 className="text-lg  text-center">
            Our corporate initiatives for achieving Vision 2030.
          </h4>
        </div>
        </div>

        <div className=" flex  ">

        <div className=" h-[40rem] w-[52%] mt-28 mx-28 bg-white ">
            <Image src={image1}  alt="heropic" />   
           <div className="m-10 bg-slate-500">
            <h2 className="text-3xl">Vision 2030 magazine</h2><br />
            <p className="text-xl" >Vision 2030 magazine is a media that shares the many challenges embarked upon by Nikon to realize their vision towards 2030 in an everchanging world.</p>
           </div>

        </div>
        <div className=" h-[40rem] w-[52%] mt-28  mx-28 bg-white ">
        <Image src={image2}  alt="heropic" />  

        </div>
        </div>
        <div className=" flex  ">

        <div className=" h-[40rem] w-[52%] mt-28 mx-28 bg-white ">
        <Image src={image3}  alt="heropic" />  

        </div>
        <div className=" h-[40rem] w-[52%] mt-28 mx-28 bg-white ">
        <Image src={image4}  alt="heropic" />  

        </div>
        </div>
    </div>
    </>
  );
};

export default Vision;
