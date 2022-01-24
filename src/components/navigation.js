import React, { useState } from "react";
import MenuDropdown from "./MenuDropdown";

const Navigation = ({ isMobileMenuOpened }) => {
  const [isDropdownOpened, setDropdownOpened] = useState(false);
  const menuItemClass =
    "py-4 border-b-[1px] border-lightGrey lg:border-none lg:py-0 lg:px-3 " +
    (isDropdownOpened ? "opacity-50" : "opacity-100"); // Be sure to replicate this change on academy item.

  return (
    <div
      className={
        (isMobileMenuOpened ? "flex" : "hidden") +
        " text-sm text-darkBlue lg:items-center flex-col lg:flex"
      }
    >
      <ul className='flex flex-col w-full lg:flex-row'>
        <li className={menuItemClass}>
          <a href='#'>Membership</a>
        </li>
        <li className={menuItemClass}>
          <a href='#'>Chapters</a>
        </li>
        <li className={menuItemClass}>
          <a href='#'>Podcast</a>
        </li>
        <li className={menuItemClass}>
          <a href='#'>Blog</a>
        </li>
        <li
          onClick={() => setDropdownOpened(!isDropdownOpened)}
          className={
            "py-4 border-b-[1px] border-lightGrey lg:border-none lg:py-0 lg:px-3 z-40 " +
            (isDropdownOpened ? "z-20 border-none lg:relative absolute" : "z-0")
          }
        >
          <a
            href='#'
            className={
              "flex " +
              (isDropdownOpened
                ? "flex-row-reverse justify-end lg:flex-row"
                : "justify-between")
            }
          >
            Jobs
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={
                "h-5 w-5 lg:w-3 ml-1 text-orange lg:text-darkBlue " +
                (isDropdownOpened
                  ? "rotate-90 lg:rotate-180"
                  : "-rotate-90 lg:rotate-0")
              }
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </li>
        <li className={menuItemClass}>
          <a href='#'>Donate</a>
        </li>
        <li className={menuItemClass}>
          <a href='#'>Shop</a>
        </li>
        <li className={menuItemClass}>
          <a href='#'>Events</a>
        </li>
        <li
          className={
            "py-4 lg:py-0 lg:px-3 " +
            (isDropdownOpened ? "opacity-50" : "opacity-100")
          }
        >
          <a href='#'>Academy</a>
        </li>
      </ul>
      {isDropdownOpened && <MenuDropdown />}
    </div>
  );
};

export default Navigation;
