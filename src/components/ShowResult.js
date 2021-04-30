import React from "react";
import {
  Description,
  ResultLink,
  SearchResult,
  Title,
} from "./SearchScreen/SearchScreen.element";

function ShowResult({ result }) {
  return (
    <SearchResult>
      <ResultLink href={result.url}>
        {result.url.substring(0, 35) + "..."}
      </ResultLink>
      <Title href={result.url}>{result.title}</Title>

      <Description>{result.description}</Description>
    </SearchResult>
  );
}

export default ShowResult;
