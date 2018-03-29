import React from "react";
import "./Header.css";
import InputSearch from "./InputSearch";
import { Link } from "react-router-dom";

export const Header = () => (
  <header position="static">
    <Link className="movie-link" to="">
      <img src="/logo.png" className="logo" alt="Video Cambio 100 Logo" />
    </Link>
    <InputSearch />
  </header>
);
