import React, { useState } from "react";
import Logo from "./../images/logo.svg";
import MobileMenu from "./mobileMenu";
import Navigation from "./navigation";
import SocialLinks from "./socialLinks";

const Header = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const handleMobileMenuClick = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  return (
    <div
      className={
        "w-full lg:sticky bg-white py-1 lg:p-6 top-0 font-light " +
        (isMobileMenuOpened ? "absolute" : "sticky")
      }
    >
      <div className='container mx-auto px-4 lg:px-0 lg:items-start flex flex-col lg:flex-row justify-between'>
        <div className='flex justify-between'>
          <a href='#'>
            <img
              className='w-[114px] lg:w-[190px]'
              src={Logo}
              alt='Girls in Tech logo'
            />
          </a>
          <MobileMenu
            handleClick={handleMobileMenuClick}
            isMobileMenuOpened={isMobileMenuOpened}
          />
        </div>
        <Navigation isMobileMenuOpened={isMobileMenuOpened} />
        <button className='hidden lg:flex border-orange border-2 bg-orange hover:bg-orangeHover hover:border-orangeHover text-sm text-white py-2 px-8 rounded-full font-light'>
          Join Us
        </button>
      </div>
      <SocialLinks isMobileMenuOpened={isMobileMenuOpened} />
    </div>
  );
};

export default Header;
