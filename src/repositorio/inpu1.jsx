import React from "react";

const App = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
  });

  // const [nome, setNome] = React.useState("");
  // const [email, setEmail] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  function handleChange({ target }) {
    const { id, value } = target;
    console.log(id, value);
    setForm({...form, [id]: value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
      />
      {form.nome}
      <label htmlFor="Email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      {form.email}
      <button>Enviar</button>
    </form>
  );
};

export default App;
