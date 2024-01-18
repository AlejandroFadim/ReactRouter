import React from "react";
import Pro from "./pro";
import { GlobalStorage } from "./UserContex";

const App = () => {
  return (
    <GlobalStorage>
      <Pro />
    </GlobalStorage>
  );
};


export default App;
