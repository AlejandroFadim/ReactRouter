import React from "react";
const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setIput] = React.useState("");
  const inputElement = React.useRef();
  function handleClick() {
    setComentarios([...comentarios, input]);
    setIput("");
    inputElement.current.focus();
  }
  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={({ target }) => setIput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default App;
