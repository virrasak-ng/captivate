"use client";
import * as React from "react";
import styles from "../page.module.css";

const pages = ["Feature", "Pricing", "FAQ"];

function CustomAppBar() {
  return (
    <header className={styles["app-header"]}>
      <div className={styles["app-container"]}>
        <div>
          <img
            className={styles["captivate-logo"]}
            src="/svg/CaptivateLogo.svg"
            alt="Captivate Logo"
          />
        </div>

        <nav className={styles["nav-links"]}>
          {pages.map((page) => (
            <button key={page}>{page}</button>
          ))}
        </nav>

        <div className={styles["auth-buttons"]}>
          <button className={styles["login-btn"]}>Log In</button>
          <button className={styles["get-started-btn"]}>Get Started</button>
        </div>
      </div>
    </header>
  );
}
export default CustomAppBar;
