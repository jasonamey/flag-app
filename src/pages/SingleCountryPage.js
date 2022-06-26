import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import useHttp from "../hooks/useHttp";
import {HiOutlineArrowNarrowLeft} from "react-icons/hi";
import {useParams, useHistory} from "react-router-dom";
import styled from "styled-components";
import countryCodes from "../utils/country-codes.json";

function SingleCountryPage() {
  const [country, setCountry] = useState(null);

  const {id} = useParams();

  const history = useHistory();

  const {fetchData: fetchCountry} = useHttp();

  const destructureAndSetCountry = (data) => {
    const borders = data.borders ? data.borders : [];
    const {
      name,
      currencies,
      languages,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
    } = data;

    setCountry({
      name,
      currencies,
      languages,
      borders,
      flag: data.flags["svg"],
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain: topLevelDomain[0],
    });
  };

  useEffect(() => {
    fetchCountry(
      `https://restcountries.com/v2/alpha/${id}`,
      destructureAndSetCountry
    );
  }, [id, fetchCountry]);

  const content = !country ? (
    <div>is loading</div>
  ) : (
    <SingleCountryPageWrapper>
      <div className="btn" onClick={() => history.push("/")}>
        <HiOutlineArrowNarrowLeft className="arrow" /> Back{" "}
      </div>
      <section className="country-container">
        <div className="flag-image">
          <img src={country.flag} alt={`-flag`} />
        </div>

        <div className="country-info-container">
          <h1>{country.name}</h1>
          <div className="country-info">
            <div className="row-1">
              <p>
                <span>Native Name:</span>
                {` ${country.nativeName}`}
              </p>
              <p>
                <span>Population:</span>

                {` ${new Intl.NumberFormat("en-US").format(
                  country.population
                )}`}
              </p>
              <p>
                <span>Region:</span>
                {` ${country.region}`}
              </p>
              <p>
                <span>Sub Region:</span>
                {` ${country.subregion}`}
              </p>
              <p>
                <span>Capital:</span>
                {` ${country.capital}`}
              </p>
            </div>
            <div className="row-2">
              <p>
                <span>Top Level Domain:</span>
                {` ${country.topLevelDomain}`}
              </p>
              <p>
                <span>Currencies:</span>
                {` ${country.currencies.map((item) => item.name).join(", ")}`}
              </p>
              <p>
                <span>Languages:</span>
                {` ${country.languages.map((item) => item.name).join(", ")}`}
              </p>
            </div>
          </div>
          {country.borders.length > 0 && (
            <div className="border-countries">
              <h4>{`Border Countries: `}</h4>
              <ul>
                {country.borders.map((code, idx) => {
                  return (
                    <Link
                      key={idx}
                      to={`/${code}`}
                      style={{color: "black", textDecoration: "none"}}
                    >
                      <li className="border-country">{countryCodes[code]}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </section>
    </SingleCountryPageWrapper>
  );

  return content;
}

const SingleCountryPageWrapper = styled.main`
  width : 90vw;
  margin: 0 auto;
  .btn {
    background-color: ${({theme}) => theme.appComponentsColor};
    color: ${({theme}) => theme.appColor};
    display : flex; 
    align-items : center; 
    justify-content : center;
    padding : 6px 3px;
    font-size: 10px;
    width: 82px;
    border: none;
    border-radius: 4px;
    box-shadow: ${({theme}) => theme.boxShadow};
    cursor: pointer;
    margin-bottom : 55px;
    .arrow {
      font-size: 16px;
      margin-right: 4px;
    }
  }
  .country-container {
    display: flex;
    justify-content: space-between;
    align-items : stretch; 
    width: 100%;
    .flag-image {
      width: 45%;
    }
    .flag-image img {
      width: 100%;
    }
    .country-info-container {
      width : 50%;
      display : flex; 
      flex-direction column; 
      align-items : flex-start;
      .country-info {
        width : 100%;
        display : flex;
        .row-1 {
          flex : 1;
        }
        .row-2 { 
          flex : 1;
        }
        p {
          font-size : 10px;
        }
        p span {
          font-weight : 800;
        }
      }
    }
    .border-countries {
      display : flex; 
      align-items : center;
      h4 {
        font-size : 12px;
        margin-right : 5px;  
      }
        ul {
          display : flex; 
          gird-gap : 10px;
          flex-wrap : wrap;
          width : 60%;
          li {
            margin-right : 5px;
            margin-bottom : 5px;
            list-style : none;
            font-size : 10px;
            padding : 2px 7px;
            box-shadow : 1px 1px 3px 0 rgba(0,0,0,0.2);
            background-color: ${({theme}) => theme.appComponentsColor};
            color: ${({theme}) => theme.appColor};
          }
        } 
    }
  }
 
  @media screen and (max-width: 540px) {
    .btn {
      margin-bottom : 25px;
    }
   .country-container {
    display : block;
    .flag-image {
      width: 100%;
    }
    .country-info-container {
      width: 100%;
    }
    .country-info { 
      display : flex;
      flex-direction : column;
     
    }
    .border-countries {
      display : block;
      ul {
        width : 100%;
      }
   }
   }
   
  }
`;

export default SingleCountryPage;
