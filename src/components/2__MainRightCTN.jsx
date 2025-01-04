import React from "react";
import LandingPriBtn from "./components/2.1__LandingPriBtn.jsx";
import SocmedBtnSection from "./components/2.2__SocmedSectBtn.jsx";

const MainRightCTN = () => {
  return (
    <section className="main-right-ctn w-[80vw] max-w-[640px] flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center">
        <b className="text-5xl font-semibold font-heading leading-normal tracking-wider">
          Build The Community Your Fans Will Love
        </b>

        <p className="text-[34px] font-body leading-normal pt-[46px] pb-10">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>

        <LandingPriBtn />
      </div>

      <SocmedBtnSection />
    </section>
  );
};

export default MainRightCTN;
