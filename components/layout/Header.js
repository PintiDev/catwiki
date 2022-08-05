import React from "react";
import Logo from "../Logo.js";
const Header = () => {
  return (
    <div className="h-20 w-full sticky flex items-center  px top-0">
      <Logo height={4} width={7} />
    </div>
  );
};

export default Header;
