import React from "react";

const App = () => {
  const [select, setSelect] = React.useState("");
  return (
    <form>
      <select
        id="produtos"
        value={select}
        onChange={({ target }) => setSelect(target.value)}
      >
        <option disabled value="">selecione</option>
        <option value="notebok">notebok</option>
        <option value="smatphone">smatphone</option>
        <option value="tablet">tablet</option>
      </select>
      {select}
    </form>
  );
};
export default App;
