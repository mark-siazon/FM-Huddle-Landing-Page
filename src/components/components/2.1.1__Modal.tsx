import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0
        bg-gray-500 bg-opacity-50
        flex items-center justify-center
        z-50
      "
    >
      <div
        className="
          bg-[#e3b0e3]
          rounded-lg
          p-6
          shadow-lg
          max-w-sm
          w-full
          text-center
        "
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
