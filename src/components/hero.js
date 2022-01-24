import React from "react";

const Hero = () => {
  return (
    <div className='flex flex-col items-center text-darkBlue'>
      <div className='text-7xl my-4 items-center flex flex-col'>
        <h1>Tech needs you.</h1>
        <h1>Just as you are.</h1>
      </div>
      <p className='mb-6 text-center'>
        Join Girls in Tech to discover inspiring programs and a diverse
        community designed to help you <br /> enter into, and excel in, tech.
      </p>
      <div>
        <button className='border-2 border-orange bg-white hover:bg-outlineHover text-darkBlue py-2 px-10 rounded-full font-light mr-1'>
          About Girls In Tech
        </button>
        <button className='bg-orange border-orange border-2 hover:bg-orangeHover hover:border-orangeHover text-white py-2 px-10 rounded-full font-light'>
          Our Stories
        </button>
      </div>
    </div>
  );
};

export default Hero;
