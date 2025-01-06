import React, { useState } from "react";

const LandingPriBtn: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Handle the button click
  const handleRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen(true);

    // Close the modal after 3 seconds
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <>
      <button
        onClick={handleRegister}
        className="
          w-72 sm:w-[25rem] md:w-[200px]
          h-16 sm:h-[5.625rem] md:h-[56px]
          bg-white text-xl sm:text-2xl text-[#43337A]
          rounded-full font-body font-medium
          flex items-center justify-center
          border hover:bg-[#E882E8] hover:text-white hover:border-[#861986]
          transition-all duration-300
        "
      >
        Register
      </button>

      {/* Conditionally render the modal based on 'isModalOpen' */}
      {isModalOpen && (
        <div
          className="
            fixed inset-0
            bg-gray-800 bg-opacity-50
            flex items-center justify-center
            z-50
          "
        >
          <div
            className="
              bg-white/75
              rounded-lg
              p-6
              shadow-lg
              max-w-sm
              w-full
              text-center
            "
          >
            <p className="text-2xl text-black font-bold mb-2">Registered!</p>
            <p className="text-gray-600">You will be redirected shortly.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPriBtn;
