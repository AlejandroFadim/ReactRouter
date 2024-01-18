import React from "react";

const App = () => {
  const [produto, setProduto] = React.useState("");

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      {produto}
      <label>
        <input
          type="radio"
          name="produto"
          value="smartphone"
          onChange={handleChange}
        />
        smartphone
      </label>
      <label>
        <input type="radio" name="produto" value="notbook" onChange={handleChange}/>
        notbook
      </label>
    </form>



  );
};
export default App;
