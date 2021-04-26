import React from "react";
import {
  Description,
  ResultLink,
  SearchResult,
  Title,
} from "./SearchScreen/SearchScreen.element";

function ShowResult({ result }) {
  console.log(result);
  return (
    <SearchResult>
      <ResultLink>
          {result.displayLink}
      </ResultLink>
      <Title>
          {result.title}
      </Title>

      <Description>{result.snippet}</Description>
    </SearchResult>
  );
}

export default ShowResult;
