import React from "react";
import Nav from "./Nav";
const App = () => {
  const [produto, setProduto] = React.useState(null);


  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto')
    if (produtoLocal !== null) setProduto(produtoLocal)
  }, [])

  React.useEffect(() => {
    if (produto !== null)
    window.localStorage.setItem("produto", produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      
      <h1>Preferencia: {produto}</h1>
      <button style={{ margin: "10px" }} onClick={handleClick}>
        Notebook
      </button>
      <button onClick={handleClick}>Smartphone</button>
      <Nav produto={produto}/>
    </div>
  );
};

export default App;

// const url = "https://ranekapi.origamid.dev/json/api/produto/notebook";
//   const url2 = "https://ranekapi.origamid.dev/json/api/produto/smartphone";
