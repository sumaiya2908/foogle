import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import {
  Logo,
  SearchBar,
  SearchIcon,
  SearchInput,
} from "../HomePage/HomePage.element";
import {
  SearchHeader,
    SearchInfo,
  SearchPage,
  SearchResultContainer,
  SearchResults,
} from "./SearchScreen.element";
import { cx, key } from "../../api";
import axios from "axios";
import ShowResult from "../ShowResult";
import { Link } from "react-router-dom";
function SearchScreen({ match }) {
  const [query, setQuery] = useState(
    match.params.query ? match.params.query : ""
  );
  const [results, setResults] = React.useState([]);
  const [info, setInfo] = React.useState("");
  const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}`;

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(url);
      if (response) {
        setResults(response.data.items);
        setInfo(response.data.searchInformation);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getPosts() {
      if (match.params.query) {
        try {
          const response = await axios.get(
            url
          );
          if (response) {
            setResults(response.data.items);
            setInfo(response.data.searchInformation);
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
      <Link to="/"><Logo home>Foogle</Logo></Link>
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
      </SearchHeader>
      <SearchResults>
          <SearchInfo>
         {info? `About ${info.totalResults} Results in (${info.searchTime}) seconds`: ""};
          </SearchInfo>
          <SearchResultContainer>
            {results.length>0? 
            results.map((result) => (
                <ShowResult result={result}/>
            )):
            ""
            }
          </SearchResultContainer>
      </SearchResults>
    </SearchPage>
  );
}

export default SearchScreen;
