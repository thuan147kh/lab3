// Header.js
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #282c34;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Nguyễn Văn Tân</h1>
      <p>Web Developer</p>
    </HeaderWrapper>
  );
};

export default Header;
