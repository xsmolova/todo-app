import * as React from "react";
// Topbar with avatar without functionality
const Topbar = () => {
  return (
    <div className="-z-10 absolute bg-accent h-20 w-screen flex justify-end items-center p-3">
      <div className="w-16 h-16 avatar online">
        <div className=" rounded-full">
          <img
            alt="woman"
            src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
