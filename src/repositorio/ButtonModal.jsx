import React from "react";

const ButtonModal = ({ setModal }) => {

  function handleClick(){
    setModal((ativo) => !ativo)
  }


  return <button onClick={handleClick}>abrir</button>;
};

export default ButtonModal;
