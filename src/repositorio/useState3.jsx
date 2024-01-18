import React from "react";
import ProdutosFetch from "./ProdutosFetch";


const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null)

  async function handleClick(e) {
    setCarregando(true)
    const respose = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`
    );

    const json = await respose.json();

    setDados(json);
    setCarregando(false)
  }

  return (
    <div>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        tablet
      </button>
      {carregando && <p>carregando...</p>}
      {!carregando &&  dados && <ProdutosFetch dados={dados} />}
    </div>
  );
};

export default App;
