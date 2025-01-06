import MainLeftCTN from "./components/1__MainLeftCTN.tsx";
import MainRightCTN from "./components/2__MainRightCTN";

function App() {
  return (
    <main
      className="
        container md:max-w-screen-xl
        flex flex-col md:flex-row mx-auto my-auto
        items-center md:items-start 
      "
    >
      <MainLeftCTN />
      <MainRightCTN />
    </main>
  );
}

export default App;
