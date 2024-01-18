import React from "react";

const ProdutosFetch = ({ dados }) => {
  return <div>
    <h1>{dados.nome}</h1>
    <p>R$ {dados.preco}</p>
    <img src="{dados.fotos[1].src}" alt="" />
  </div>;
};

export default ProdutosFetch;
