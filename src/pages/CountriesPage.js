import React, {useState, useEffect, useRef} from "react";
import Country from "../components/Country";
import Filter from "../components/Filter";
import Search from "../components/Search";
import styled from "styled-components";

function CountriesPage({countriesData, loading}) {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const ref = useRef();

  const searchHandler = (phrase) => {
    setSearchTerm(phrase.toLowerCase());
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isFilterOpen && ref.current && ref.current.contains(e.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isFilterOpen]);

  useEffect(() => {
    if (!searchTerm) {
      setCountries(countriesData);
    } else {
      const newCountries = countriesData.filter((country) => {
        return country.name.toLowerCase().indexOf(searchTerm) > -1;
      });
      setCountries(newCountries);
    }
  }, [searchTerm, loading, countriesData]);

  useEffect(() => {
    if (!filterTerm || filterTerm === "All") {
      setCountries(countriesData);
    } else {
      const newCountries = countriesData.filter((country) => {
        return country.region === filterTerm;
      });
      setCountries(newCountries);
    }
  }, [filterTerm, loading, countriesData]);

  if (loading) {
    return <p>loading</p>;
  } else {
    return (
      <CountriesPageWrapper ref={ref}>
        <div className="filters-container">
          <Search setSearch={searchHandler} value={searchTerm} />
          <Filter
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
            setFilterTerm={setFilterTerm}
          />
        </div>
        <div className="countries-container">
          {countries.map((country, idx) => {
            return <Country key={idx} {...country} />;
          })}
        </div>
      </CountriesPageWrapper>
    );
  }
}

const CountriesPageWrapper = styled.main`
  width: 95vw;
  margin: 0 auto;

  .filters-container {
    display: flex;
    justify-content: space-between;
    height: 40px;
    margin-bottom: 42px;
  }
  .countries-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
  }

  @media screen and (max-width: 480px) {
    width: 80vw;
    .countries-container {
      display: block;
    }
    .filters-container {
      height: 80px;
      display: block;
    }
  }
`;

export default CountriesPage;
