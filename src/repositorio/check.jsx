import React from "react";
import Input from "./form/Input";
import Select from "./form/Select";
import Radio from "./form/Radio";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [carros, setCarros] = React.useState("");

  return (
    <form>
      <h2>cores</h2>
      <Radio options={["azul", "vermelho"]} value={cor} setValue={setCor} />
      <h2>carros</h2>
      <Radio
        options={["palio", "gol", "corsa", "meriva"]}
        value={carros}
        setValue={setCarros}
      />

      <Select
        options={["smartphone", "tablet", "notebook"]}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="nome" value={nome} setValue={setNome} required />
      <Input
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        required
      />
      <button>Enviar</button>
    </form>
  );
};
export default App;
