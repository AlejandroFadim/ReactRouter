import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [erro, setErro] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const requeste = React.useCallback(async (url, option) => {
    let response;
    let json;
    try {
      setErro(null);
      setLoading(true);
      response = await fetch(url, option);
      json = await response.json();
      setLoading(false);
    } catch (erro) {
      json = null;
      setErro("erro 404");
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, erro, loading, requeste };
};

export default useFetch;
