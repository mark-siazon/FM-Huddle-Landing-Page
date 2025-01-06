import MainLeftCTN from "./components/1__MainLeftCTN.tsx";
import MainRightCTN from "./components/2__MainRightCTN";

function App() {
  return (
    <main
      className="
        container md:max-w-screen-xl 2xl:max-w-[1440px]
        flex flex-col md:flex-row mx-auto my-auto
        items-center md:items-start xl:gap-20
      "
    >
      <MainLeftCTN />
      <MainRightCTN />
    </main>
  );
}

export default App;
