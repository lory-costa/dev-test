import React from "react";

const MenuDropdown = () => {
  return (
    <div className='h-[100vh] fixed top-0 bg-white z-10 flex items-center mt-12 xl:h-auto xl:relative'>
      <img
        width='180'
        height='180'
        src='https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Group-Final_circle-180x180.png'
        alt=''
        loading='lazy'
        srcset='https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Group-Final_circle-180x180.png 180w, https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Group-Final_circle-700x700.png 700w, https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Group-Final_circle-100x100.png 100w, https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Group-Final_circle-768x768.png 768w, https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Group-Final_circle-240x240.png 240w, https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Group-Final_circle-360x360.png 360w, https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Group-Final_circle-480x480.png 480w, https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Group-Final_circle-640x640.png 640w, https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Group-Final_circle-300x300.png 300w, https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Group-Final_circle-150x150.png 150w, https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Group-Final_circle-160x160.png 160w, https://1m6n143uhgz333i25i4am7ul-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Group-Final_circle.png 800w'
        sizes='(max-width: 180px) 100vw, 180px'
        className='attachment-180x180 size-180x180 mr-8'
      />
      <div className='text-center'>
        <h3 className='text-2xl mb-3'>
          It's time to evolve the story and <br /> reality of tech.
        </h3>
        <div>
          <button className='border-2 border-orange bg-white hover:bg-outlineHover text-darkBlue py-2 px-10 rounded-full font-light mr-1'>
            Post A Job
          </button>
          <button className='bg-orange border-orange border-2 hover:bg-orangeHover hover:border-orangeHover text-white py-2 px-10 rounded-full font-light'>
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;
