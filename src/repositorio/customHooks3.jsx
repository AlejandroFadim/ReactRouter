import React from "react";
import useLocalStorage from "./useLocalStorage";
import useFetch from "./useFetch";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { requeste, data, loading, erro } = useFetch();

  function handleclick({ target }) {
    setProduto(target.innerText);
  }

  React.useEffect(() => {
    async function fetchData() {
      const {response, json} = await requeste(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );
      console.log(response);
    }
    fetchData();
  }, [requeste]);
  if (erro) return <p>{erro}</p>;
  if (loading) return <p>carregando...</p>;
  if (data)
    return (
      <div>
        <p>produto preferido {produto}</p>
        <button onClick={handleclick}>notbook</button>
        <button onClick={handleclick}>smartphone</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default App;
