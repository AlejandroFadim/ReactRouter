import React from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "./ComponetesRoutes/Produtos";
import Header from "./ComponetesRoutes/Header";
import Footer from "./ComponetesRoutes/Footer";
import Contato from "./ComponetesRoutes/Contato";
import Produto from "./ComponetesRoutes/Produto";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content"> 
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
