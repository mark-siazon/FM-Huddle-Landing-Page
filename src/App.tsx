// import { useState } from "react";
import "./App.css";
import MainLeftCTN from "./components/1__MainLeftCTN";
import MainRightCTN from "./components/2__MainRightCTN.jsx";

function App() {
  return (
    <main className="flex flex-col items-center justify-center">
      <MainLeftCTN />
      <MainRightCTN />
    </main>
  );
}

export default App;
