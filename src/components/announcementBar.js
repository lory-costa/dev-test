import React from "react";

const AnnouncementBar = () => {
  return (
    <div className='bg-darkBlue flex flex-col text-lightPink items-center text-sm py-3 font-extralight w-100'>
      <p className='text-center'>
        <span>You don't want to miss our upcoming events - </span>
        <a
          className='border-b-[1px] border-lightPink hover:border-[transparent] transition duration-200 whitespace-nowrap'
          href='#'
        >
          Reserve your spot now!
        </a>
      </p>
    </div>
  );
};

export default AnnouncementBar;
