import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SearchPage = styled.div`

`;
export const SearchHeader = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px #dedace solid;
    
`;

export const SearchResults = styled.div`
width: 65%;
margin: auto;

display: flex;
flex-direction: column;

@media only screen and (max-width: 600px){
    width: 95%;
}
    
`;

export const SearchInfo = styled.div`
    color:#aeafb0;
    font-size: 1rem;
    font-family: serif;
    margin-top: 20px;
`;

export const SearchResultContainer = styled.div `
display: flex;
flex-direction: column;
margin-top: 20px;
`;

export const SearchResult = styled.div`
display: flex;
flex-direction: column;
border: 1px solid #dedace;
border-radius: 10px;
padding: 1rem;
margin-bottom: 1rem;
`;

export const Title = styled.div`
padding-top: 10px;
`;

export const ResultLink = styled(Link)`

`;

export const Description = styled.div`
padding-top:10px;`;