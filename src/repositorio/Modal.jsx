import React from "react";

const Modal = ({ modal, setModal }) => {
  if (modal)
    return (
      <div>
        esse é um modal. <button onClick={() => setModal(false)}>fechar</button>
      </div>
    );
  return null;
};

export default Modal;
