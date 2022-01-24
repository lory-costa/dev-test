import React from "react";

const socialLinks = ({ isMobileMenuOpened }) => {
  return (
    <div
      className={
        "w-full p-4 justify-between lg:hidden fixed bottom-0 " +
        (isMobileMenuOpened ? "flex" : "hidden")
      }
    >
      <a
        className='border-[1px] border-mediumGrey w-full flex justify-center py-3'
        href='#'
      >
        <img
          width='19'
          src='https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/instagram.svg'
          alt='Instagram'
        />
      </a>
      <a
        className='border-y-[1px] border-r-[1px] border-mediumGrey w-full flex justify-center py-3'
        href='#'
      >
        <img
          width='19'
          src='https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/youtube.svg'
          alt='YouTube'
        />
      </a>
      <a
        className='border-y-[1px] border-r-[1px] border-mediumGrey w-full flex justify-center py-3'
        href='#'
      >
        <img
          width='19'
          src='https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/linkedin.svg'
          alt='LinkedIn'
        />
      </a>
      <a
        className='border-y-[1px] border-r-[1px] border-mediumGrey w-full flex justify-center py-3'
        href='#'
      >
        <img
          width='19'
          src='https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/facebook.svg'
          alt='FaceBook'
        />
      </a>
      <a
        className='border-y-[1px] border-r-[1px] border-mediumGrey w-full flex justify-center py-3'
        href='#'
      >
        <img
          width='19'
          src='https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/twitter.svg'
          alt='Twitter'
        />
      </a>
    </div>
  );
};

export default socialLinks;
