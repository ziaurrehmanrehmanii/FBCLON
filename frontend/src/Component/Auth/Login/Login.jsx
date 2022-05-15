/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Formc from "./Form/Formc";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={`${styles.Row1} ${styles.Row}`}></div>
      <div className={`${styles.Row2} ${styles.Row}`}>
        <div className={`${styles.Col1} ${styles.Col}`}>
          <h1 className={`${styles.herotext}`}>Facebook</h1>
          <p>
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className={`${styles.Col2} ${styles.Col}`}>
          <Formc />
        </div>
      </div>
      {/* <div className={`${styles.Row3} ${styles.Row}`}>ROW 3</div> */}
      <div className={`${styles.Row4} ${styles.Row}`}></div>
    </div>
  );
}
