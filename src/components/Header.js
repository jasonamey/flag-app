import React from "react";
import styled from "styled-components";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

function Header({ theme, toggleTheme }) {
  return (
    <HeaderWrapper>
      <h1>Where in the World?</h1>
      {theme === "light" ? (
        <div className="theme-button" onClick={() => toggleTheme()}>
          <HiOutlineMoon class="theme-logo" /> <p>Dark Mode</p>
        </div>
      ) : (
        <div className="theme-button" onClick={() => toggleTheme()}>
          <HiOutlineSun className="theme-logo" /> <p>Light Mode</p>
        </div>
      )}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  padding: 22px 54px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.appComponentsColor};
  color: ${({ theme }) => theme.appColor};
  h1 {
    font-weight: 800;
    font-size: 16px;
  }
  .theme-button {
    display: flex;
    align-items: center;
    cursor: pointer;
    .theme-logo {
      margin-right: 4px;
    }
    p {
      font-size: 12px;
      font-weight: 800;
    }
  }
  @media screen and (max-width: 570px) {
    margin-bottom: 26px;
  }
  @media screen and (max-width: 360px) {
    padding: 12px 24px;
  } ;
`;

export default Header;
