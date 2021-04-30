import styled from "styled-components";

export const SearchPage = styled.div``;
export const SearchHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.5rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px #dedace solid;
`;
export const SearchLogo = styled.div`
  display: flex;
  justify-content: center;
`;
export const SearchCategories = styled.ul`
  display: flex;
  width: 60%;
  margin: auto;
`;

export const Category = styled.li`
  font-size: 1.3rem;
  padding: 1rem 2rem 0 0.5rem;
  cursor: pointer;
  color: black;
`;
export const SearchResults = styled.div`
  width: 65%;
  margin: auto;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    width: 95%;
  }
`;

export const SearchInfo = styled.div`
  color: #aeafb0;
  font-size: 1rem;
  font-family: serif;
  margin-top: 20px;
`;

export const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

// web search

export const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dedace;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const Title = styled.a`
  padding-top: 10px;
  font-size: 1.3rem;
  color: blue;
  &:hover {
    text-decoration: underline;
  }
`;

export const ResultLink = styled.a`
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.div`
  padding-top: 10px;
`;

export const NewsPub = styled.div`
  font-size: 1rem;
  color: grey;
`;

export const NewsTitle = styled.a`
  font-size: 1.3rem;
`;

export const NewsDescrp = styled.div`
  margin-bottom: 10px;
`;

export const NewsDate = styled.div``;

export const NewsImage = styled.img``;
