import React from "react";
import AppLogo from "../assets/logo.svg";
import AppIllustration from "../assets/illustration-mockups.svg";

const MainLeftCTN = () => {
  return (
    <section className="main-left-ctn">
      <img
        src={AppLogo}
        className="w-[264px] h-[65.33px]"
        alt="Huddle App Logo"
      />
      <img
        src={AppIllustration}
        className="transform scale-[0.85]"
        alt="Low-fidelity illustration of website"
      />
    </section>
  );
};

export default MainLeftCTN;
