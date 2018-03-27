import React from "react";
import "./Header.css";
import InputSearch from "./InputSearch";

export const Header = () => (
  <header position="static">
    <img src="logo.png" className="logo" alt="Video Cambio 100 Logo" />
    <InputSearch />
  </header>
);
