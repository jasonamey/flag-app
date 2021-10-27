import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

function Search({ setSearch, searchTerm }) {
  return (
    <SearchWrapper>
      <AiOutlineSearch className="search-icon" />
      <input
        value={searchTerm}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a country..."
      />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.appComponentsColor};
  padding-left: 24px;
  border-radius: 4px;
  overflow: hidden;
  height: 40px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  .search-icon {
    font-size: 18px;
    margin-right: 20px;
  }
  input {
    height: 100%;
    width: 100%;
    font-family: inherit;
    outline: none;
    border: none;
    background-color: inherit;
    color: ${({ theme }) => theme.appColor};
    caret: ${({ theme }) => theme.appColor};
    &::placeholder {
      color: ${({ theme }) => theme.inputColor};
    }
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export default Search;
