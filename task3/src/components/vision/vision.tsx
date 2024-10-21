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
          <h1 className="text-4xl font-bold text-black  text-center ">Vision 2030</h1>{" "}
          <br />
          <p className="text-2xl font-bold text-black  text-center">
            A key technology solutions company in a global society
          </p>
          <p className="text-2xl font-bold text-black  text-center">
            where humans and machines co-create seamlessly
          </p>
          <br />
          <h4 className="text-lg  text-black  text-center">
            Our corporate initiatives for achieving Vision 2030.
          </h4>
        </div>
        </div>

        <div className=" flex  ">

        <div className=" h-[40rem] w-[52%] mt-28 mx-28 bg-white ">
            <Image src={image1}  alt="heropic" />   
           <div className="m-10 ">
            <h2 className="text-3xl text-black ">Vision 2030 magazine</h2><br />
            <p className="text-xl text-black  " >Vision 2030 magazine is a media that shares the many challenges embarked upon by Nikon to realize their vision towards 2030 in an everchanging world.</p><br />
            <button className="text-lg bg-black text-white px-8 py-2">To the special website</button>
           </div>

        </div>
        <div className=" h-[40rem] w-[52%] mt-28  mx-28 bg-white ">
        <Image src={image2}  alt="heropic" />  
        <div className="m-10 ">
            <h2 className="text-3xl text-black  ">Movie &quot;Vision 2030&quot;</h2><br />
            <p className="text-xl text-black  " >Nikon has been taking on new challenges towards the realization of &quot;Vision 2030&quot;. Here, you can learn more about our future envisions through the four areas of value proposition: factory, energy, healthcare, and life & entertainment. (02:08)</p><br />
            <button className="text-lg bg-black text-white px-8 py-2">Play movie</button>
           </div>

        </div>
        </div>
        <div className=" flex  ">

        <div className=" h-[40rem] w-[52%] mt-28 mx-28 bg-white ">
        <Image src={image3}  alt="heropic" />  
        <div className="m-10 ">
            <h2 className="text-3xl text-black  ">Nikon&apos;s Sustainability</h2><br />
            <p className="text-md text-black  " >By embodying our corporate philosophy of &quot;Trustworthiness and Creativity&quot; in our business activities, we aim to both contribute to a sustainable society and achieve sustainable growth for our company. Here we present Nikon&apos;s sustainability activities in the areas of business, environment, social and labor affairs, and governance.</p><br />
            <button className="text-lg bg-black text-white px-8 py-2">Click here for details</button>
           </div>
        </div>
        <div className=" h-[40rem] w-[52%] mt-28 mx-28 bg-white ">
        <Image src={image4}  alt="heropic" />  
        <div className="m-10">
            <h2 className="text-3xl text-black ">Creating new imaging value</h2><br />
            <p className="text-md text-black  " >For the Company Profile 2023-2024, we shot a movie using cutting-edge imaging technology from Nikon group company Nikon Creates. The movie produced in conjunction with the cover image of the Company Profile 2023-2024 is available at the following link. (Length: 52 seconds)</p><br />
            <button className="text-lg bg-black text-white px-9 py-2">Play movie</button>
            <button className="text-lg bg-black text-white ml-8 px-9 py-2">Click here for details</button>
           </div>
        </div>
        </div>
    </div>
    </>
  );
};

export default Vision;
