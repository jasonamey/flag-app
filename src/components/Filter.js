import React from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

function Filter(props) {
  const { isFilterOpen, setIsFilterOpen, setFilterTerm } = props;

  const regionContent = regions.map((region, idx) => (
    <li key={idx} onClick={() => setFilterTerm(region)}>
      {region}
    </li>
  ));

  return (
    <FilterWrapper>
      <div
        className="filter-header"
        onClick={() => setIsFilterOpen((prevState) => !prevState)}
      >
        <button>Filter By Region</button>
        <BiChevronDown className={`chevron ${isFilterOpen ? "open" : ""}`} />
      </div>
      {isFilterOpen && <ul className="regions">{regionContent}</ul>}
    </FilterWrapper>
  );
}

const FilterWrapper = styled.div`
  width: 136px;
  position: relative;
  box-shadow: ${({ theme }) => theme.boxShadow};
  .filter-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.appComponentsColor};
    padding: 14px 8px;
    border-radius: 4px;
    margin-bottom: 4px;
    button {
      font-size: 12px;
      padding: 0;
      height: 100%;
      width: 100%;
      border: none;
      background-color: ${({ theme }) => theme.appComponentsColor};
      border-radius: 4px;
      font-family: inherit;
    }
    .chevron {
      font-size: 16px;
      transition: all 0.5s;
      &.open {
        transform: rotate(180deg);
      }
    }
  }
  .regions {
    margin: 0;
    background-color: ${({ theme }) => theme.appComponentsColor};
    display: absolute;
    padding: 14px 8px;
    border-radius: 4px;
    // box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.5);
    box-shadow: ${({ theme }) => theme.boxShadow};
    li {
      font-size: 12px;
      list-style: none;
      cursor: pointer;
      &:not(:last-child) {
        padding-bottom: 6px;
      }
    }
  }
`;

export default Filter;
