import React from "react";

export const UserContex = React.createContext();

export const GlobalStorage = ({ children }) => {
  <GlobalStorage.provider value={{ nome: "andré" }}>
    {children}
  </GlobalStorage.provider>;
};
