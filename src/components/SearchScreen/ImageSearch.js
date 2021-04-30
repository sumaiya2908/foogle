import React from "react";
import {
  NewsDate,
  NewsDescrp,
  NewsPub,
  NewsTitle,
  SearchResult,
} from "./SearchScreen.element";

function NewsSearch({ result }) {
  return (
    <SearchResult>
      <NewsPub> {result.provider.name} </NewsPub>

      <NewsTitle href={result.url.substring(0, 35) + "..."}>
        {result.title}
      </NewsTitle>
      <NewsDescrp>{result.description}</NewsDescrp>
      <NewsDate>{result.datePublished}</NewsDate>
    </SearchResult>
  );
}
export { NewsSearch };
