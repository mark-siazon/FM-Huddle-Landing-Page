import LandingPriBtn from "./components/2.1__LandingPriBtn.js";
import SocmedBtnSection from "./components/2.2__SocmedSectBtn.js";

const MainRightCTN = () => {
  return (
    <section
      className="
        main-right-ctn flex flex-col items-center md:items-end justify-center gap-10 
        max-w-[90vw] sm:max-w-[560px] md:max-w-[540px] lg:max-w-[640px] lg:h-screen md:max-h-[610px]
        md:mt-6 lg:mt-12 xl:mt-6
      "
    >
      <div
        className="
          flex flex-col items-center md:items-start md:max-w-[540px] lg:max-w-[450px] xl:max-w-[540px]
        "
      >
        <b
          className="
            font-heading font-semibold tracking-wider 
            text-3xl sm:text-5xl md:text-[40px] text-center md:text-start
            leading-tight sm:leading-[1.15] md:leading-tight
            transition-all duration-500
          "
        >
          Build The Community Your Fans Will Love
        </b>

        <p
          className="
            font-body text-xl sm:text-3xl md:text-lg text-center md:text-start
            leading-relaxed sm:leading-normal md:leading-relaxed 
            pt-8 sm:pt-[2.875rem] md:pt-9 pb-10 sm:pb-16 md:pb-6
          "
        >
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
