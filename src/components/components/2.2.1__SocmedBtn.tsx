import React from "react";

const SocmedBtn = ({ href, icon }) => {
  return (
    <a
      className="group border border-white w-[58.13px] h-[59.06px] bg-transparent rounded-full flex items-center justify-center transition-all duration-300 hover:border-[#FC51C1]"
      href={href}
    >
      <span className="transition-all duration-300 text-white group-hover:text-[#FC51C1]">
        {icon}
      </span>
    </a>
  );
};

export default SocmedBtn;
