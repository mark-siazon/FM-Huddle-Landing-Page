import React, { ReactNode } from "react";
interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
