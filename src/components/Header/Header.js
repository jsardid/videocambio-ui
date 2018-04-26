import React from "react";
import InputSearch from "./InputSearch";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "grid-styled";

const StyledHeader = styled(Flex)`
  background-color: #e7e7eb;
  box-shadow: 0px 0px 10px #000000;
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.img`
  max-width: 100%;
  height: auto;
`;

const LogoLayout = styled.div`
  width: 100px;
  margin: 0px 20px;
  @media only screen and (max-width: 500px) {
    margin: 0px 10px 0px 0px;
    width: 80px;
  }
`;
const SearchLayout = styled.div`
  width: 100px;
  flex-grow: 1;
  max-width: 500px;
`;

export const Header = () => (
  <div>
    <StyledHeader>
      <LogoLayout>
        <Link to="">
          <StyledLogo src="/logo.png" alt="Video Cambio 100 Logo" />
        </Link>
      </LogoLayout>
      <SearchLayout>
        <InputSearch />
      </SearchLayout>
    </StyledHeader>
  </div>
);
