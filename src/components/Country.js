import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Country(props) {
  const { flags, capital, name, population, region, alpha3Code } = props;

  return (
    <CountryWrapper>
      <Link to={`/${alpha3Code}`}>
        <img src={flags["png"]} alt={name} />
        <div className="text-container">
          <h4>{name}</h4>
          <p>
            <span>Population:</span>
            {` ${new Intl.NumberFormat("en-US").format(population)}`}
          </p>
          <p>
            <span>Region:</span>
            {` ${region}`}
          </p>
          <p>
            <span>Capital:</span>
            {` ${capital}`}
          </p>
        </div>
      </Link>
    </CountryWrapper>
  );
}

export default Country;

const CountryWrapper = styled.section`
  height: 224px;
  width: 166px;
  background-color: ${({ theme }) => theme.appComponentsColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.appColor};
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: 50%;
    object-fit: cover;
  }
  .text-container {
    padding-left: 18px;
    padding-right: 18px;
    width: auto;
  }
  h4 {
    font-size: 12px;
    margin-bottom: 13px;
    word-wrap: break-word;
  }
  p {
    font-size: 9px;
    line-height: 0.7;
  }
  p span {
    font-weight: 600;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    margin-bottom: 40px;
    img {
      height: 100%;
    }
    .text-container {
      padding: 0 18px 18px 18px;
    }
  }
`;
