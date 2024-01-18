import React from "react";

const Product = () => {
  React.useEffect(() => {
    function handleScroll(e) {
      console.log(e);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <p>Meu produto</p>
    </div>
  );
};

export default Product;
