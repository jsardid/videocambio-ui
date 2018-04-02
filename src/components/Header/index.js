import React from "react";
import InputSearch from "./InputSearch";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #e7e7eb;
  position: fixed;
  width: 100%;
  height: 120px;
  top: 0px;
  z-index: 1;
  box-shadow: 0px 0px 10px #000000;
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.img`
  height: 120px;
  margin-left: 100px;
`;

export const Header = () => (
  <StyledHeader position="static">
    <Link to="">
      <StyledLogo src="/logo.png" alt="Video Cambio 100 Logo" />
    </Link>
    <InputSearch />
  </StyledHeader>
);
