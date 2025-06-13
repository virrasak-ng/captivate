"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import styles from "../page.module.css";

const pages = ["Feature", "Pricing", "FAQ"];

function CustomAppBar() {
  return (
    <header className={styles["app-header"]}>
      <div className={styles["app-container"]}>
        <div>
          <img className={styles["captivate-logo"]} src="/svg/CaptivateLogo.svg" alt="Captivate Logo" />
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
