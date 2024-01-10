// Footer.js
import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const ContactInfo = styled.div`
  p {
    margin: 0.5rem 0;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <h2>Contact Information</h2>
      <ContactInfo>
        <p>Email: vantaan2002@gmail.com</p>
        <p>GitHub: github.com/nguyentaan</p>
      </ContactInfo>
    </FooterWrapper>
  );
};

export default Footer;
