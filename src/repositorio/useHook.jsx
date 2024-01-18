import React from "react";
import useLocalStorage from './useLocalStorage'

const App = () => {
  const [produti, setProduto] = useLocalStorage('produto', '')

  function handleclick({target}) {
    
  }
  return <div>
    <button onClick={handleclick}>notbook</button>
    <button onClick={handleclick}>smartphone</button>
  </div>;
};

export default App;
