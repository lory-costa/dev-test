import React from "react";

const MobileMenu = ({ isMobileMenuOpened, handleClick }) => {
  return (
    <div className='bg-white items-center flex justify-between py-4 sticky top-0 font-light lg:hidden'>
      {isMobileMenuOpened ? (
        <div
          className='space-y-1.5 text-orange cursor-pointer'
          onClick={handleClick}
        >
          <svg
            className='w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </div>
      ) : (
        <div className='space-y-1.5 cursor-pointer' onClick={handleClick}>
          <span className='block w-5 h-[1px] bg-orange' />
          <span className='block w-5 h-[1px] bg-orange' />
          <span className='block w-3 h-[1px] bg-orange' />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
