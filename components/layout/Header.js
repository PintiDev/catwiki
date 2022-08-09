import React from "react";
import Logo from "../Logo.js";
const Header = () => {
  return (
    <div className="sm:h-20 h-16 w-full sticky sm:px-10 px-4 flex items-center  z-[99999] backdrop-blur-lg top-0">
      <Logo height={4} width={7} />
    </div>
  );
};

export default Header;
