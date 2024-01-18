import React from "react";
const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setnotificacao] = React.useState(null);
  const referencia = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    clearTimeout(referencia.current);
    setnotificacao("item adicionado ao carrinho");
    referencia.current = setTimeout(() => {
      setnotificacao(null);
    }, 2000);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
};

export default App;
