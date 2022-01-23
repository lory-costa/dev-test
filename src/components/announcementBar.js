import React from "react";

const AnnouncementBar = () => {
  return (
    <div className='bg-darkBlue flex flex-col text-lightPink h-14 text-lg py-4 items-center'>
      <p>
        You don't want to miss our upcoming events -&nbsp;
        <a
          className='border-b-[1px] border-lightPink hover:border-[transparent] transition duration-200'
          href='https://girlsintech.org/events/'
          target='_blank'
          tabindex='0'
        >
          Reserve your spot now!
        </a>
      </p>
    </div>
  );
};

export default AnnouncementBar;
