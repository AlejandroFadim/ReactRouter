import React from "react";
import Input from "../form/Input";
const App = () => {
  const [cep, setCep] = React.useState("");
  const [erro, setErro] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setErro("preencha um valor valido");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setErro("preencha um valor valido");
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function handleBluor({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (erro) validateCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (validateCep(cep)) {
      console.log('enviou')
    } else {
      console.log('nao enviou')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        value={cep}
        onChange={handleChange}
        onBlur={handleBluor}
      />
      {erro && <p>{erro}</p>}
      <button>Enviar</button>
    </form>
  );
};
export default App;
