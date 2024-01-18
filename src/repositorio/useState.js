import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const App = () => {
  const [modal, setModal] = React.useState(false);
  let [ items, setItems] = React.useState('teste')

  function handleClick() {
    setItems('outro')
  }
  return (
    <div>
      <p>{items}</p>
      <button onClick={handleClick}>clicar</button>
      <div>{modal ? "modal aberto" : "modalFechado"}</div>
      <Modal  modal={modal} setModal={setModal}/>
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App;
