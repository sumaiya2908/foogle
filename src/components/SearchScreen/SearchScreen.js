import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import {
  Logo,
  SearchBar,
  SearchIcon,
  SearchInput,
} from "../HomePage/HomePage.element";
import {
  Category,
  SearchCategories,
  SearchHeader,
  SearchInfo,
  SearchLogo,
  SearchPage,
  SearchResultContainer,
  SearchResults,
} from "./SearchScreen.element";
import axios from "axios";
import ShowResult from "../ShowResult";
import { Link } from "react-router-dom";
function SearchScreen({ match }) {
  const [query, setQuery] = useState(
    match.params.query ? match.params.query : ""
  );
  const [results, setResults] = React.useState([]);
  const [imageResults,setImageResults] = React.useState([]);
  const [info, setInfo] = React.useState("");
  const url= `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${query}&pageNumber=1&pageSize=10&autoCorrect=true`;

  var config = {
      headers: { 
        'x-rapidapi-key': '376353985cmsh2e3361c641fac5bp1fd37ejsn9c90b959aab4', 
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    };
  
  

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(url,config);
      if (response) {
        setResults(response.data.value);
            setInfo(response.data.totalCount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getPosts() {
      if (match.params.query) {
        try {
          const response = await axios.get(url,config);
          if (response) {
            setResults(response.data.value);
            setInfo(response.data.totalCount);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    getPosts();
  }, []);

  return (
    <SearchPage>
      <SearchHeader>
        <SearchLogo>
          <Link to="/">
            <Logo home>Foogle</Logo>
          </Link>
          <SearchBar>
            <SearchInput
              placeholder="Search here..."
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              required
              value={query}
            />
            <SearchIcon onClick={handleClick}>
              <BiSearchAlt />
            </SearchIcon>
          </SearchBar>
        </SearchLogo>
        <SearchCategories>
        <Category>Web</Category>
        <Category>Image</Category>
        <Category>News</Category>
        </SearchCategories>
      </SearchHeader>
      <SearchResults>
        <SearchInfo>
          {info
            ? `Found ${info} Results`
            : ""}
          ;
        </SearchInfo>
        <SearchResultContainer>
          {results.length > 0
            ? results.map((result) => <ShowResult result={result} />)
            : ""}
        </SearchResultContainer>
      </SearchResults>
    </SearchPage>
  );
}

export default SearchScreen;
