import React from "react";

interface SocmedBtnProps {
  href: string;
  icon: React.ReactNode;
  ariaLabel?: string;
}

const SocmedBtn: React.FC<SocmedBtnProps> = ({ href, icon, ariaLabel }) => {
  return (
    <a
      className="group border border-white w-[58.13px] h-[59.06px] bg-transparent rounded-full flex items-center justify-center transition-all duration-300 hover:border-[#FC51C1]"
      href={href}
      aria-label={ariaLabel}
    >
      <span className="transition-all duration-300 text-white group-hover:text-[#FC51C1]">
        {icon}
      </span>
    </a>
  );
};

export default SocmedBtn;
