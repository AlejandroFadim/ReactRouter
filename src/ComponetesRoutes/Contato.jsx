import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./head";

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title='Ranek | Contato' description='entre em contato'/>
      <img src={foto} alt="" />
      <div>
        <h1>Entre em contato conosco</h1>
        <ul className={styles.dados}>
          <li>
            BoemiaDev@gmail.com
          </li>
          <li>
            99999-9999
          </li>
          <li>
            Rua ali-perto n°9999
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
