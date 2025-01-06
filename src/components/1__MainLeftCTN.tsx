import AppLogo from "../assets/logo.svg";
import AppIllustration from "../assets/illustration-mockups.svg";

const MainLeftCTN = () => {
  return (
    <section className="main-left-ctn md:ml-0 mt-8 sm:mt-0 ml-2 sm:ml-2 md:mt-6">
      <img src={AppLogo} className="w-48 lg:w-52 h-14" alt="Huddle App Logo" />
      <img
        src={AppIllustration}
        className="transform scale-[0.85] lg:scale-75"
        alt="Low-fidelity illustration of website"
      />
    </section>
  );
};

export default MainLeftCTN;
